import { Page } from "./page";

export interface Breadcrumb {
    tree: Page[];
    parent:Page;
    current:Page;
}
