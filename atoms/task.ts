import { atom } from "recoil";

export type task= {
    is: boolean;
}

// Todoリストを保持
const isTask = atom<task[]>({
    key: 'isTask',
    default: [],
});

export { isTask }