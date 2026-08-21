import {test, expect } from "@playwright/test"
import { revalidatePath } from "next/cache";

test('Adding a new task', async ({page}) => {
    await page.goto("http://localhost:3000/");
    const tasks = await page.getByTestId("task-card");



    await page.getByPlaceholder("Task title...").fill("Title");
    await page.getByPlaceholder("Task description...").fill("Description");
    await page.getByTestId('task-creation-options').selectOption("In Progress");
    await page.getByRole("button", {name: "Add Task"}).click();


    await expect(page.getByRole('link', {name: "Title"})).toBeVisible();

})