import { test, expect } from "@playwright/test"

test.describe('Unit Testing', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/");
        await expect(page).toHaveURL("http://localhost:3000/");
    })

    test.describe('Filtering Tasks', () => {
        test.beforeEach(async ({ page }) => {
            await page.getByRole('combobox', { name: "FILTER BY STATUS" }).click();
        })

        const statusMap: Record<string, string> = {
            'To Do': 'todo',
            'In Progress': 'in progress',
            'Done': 'done'
        };

        const statuses = Object.keys(statusMap);

        for (const status of statuses) {
            test(`Filters by ${status}`, async ({ page }) => {                
                await page.getByRole('combobox', { name: "FILTER BY STATUS" }).selectOption(status);
                const filteredTasks = page.getByTestId("task-card");
                
                if(status === "Done"){
                    await expect(filteredTasks).toHaveCount(0);
                    return;
                }
                await expect(filteredTasks).not.toHaveCount(0);

                const tasks = await filteredTasks.all();
                for (const task of tasks) {
                    const statusText = task.getByTestId("task-status");
                    const expectedStatus = statusMap[status];
                    await expect(statusText).toContainText(expectedStatus);
                }
            });
        }
    });

    test.describe('Accessing task details', () => {
    
        const selectedTasks = [
            { id: 0, title: "Get Up" },
            { id: 1, title: "Take A Shower" },
            { id: 5, title: "Read a Book" }
        ];

        for (const task of selectedTasks) {
            
            test(`Opening details page for: ${task.title}`, async ({ page }) => {
                await page.goto("http://localhost:3000/");

                const taskCard = page.getByTestId("task-card").filter({ hasText: task.title });
                await taskCard.click();

                await expect(page).toHaveURL(new RegExp(`/${task.id}$`));
                await expect(page.getByText(task.title)).toBeVisible();
            });
        }
    });
});