import { pushToHistory } from "../scripts/router";

/**
 * @jest-environment jsdom
 */
test('push to history: settings', () => {
    let oldLength = window.history.length;
    pushToHistory('settings', 1);
    let newLength = window.history.length;
    expect(newLength).toBe(oldLength + 1);
    expect(window.history.state.page).toBe("settings");
});

test('push to history: entry', () => {
    let oldLength = window.history.length;
    pushToHistory('entry', 1);
    let newLength = window.history.length;
    expect(newLength).toBe(oldLength + 1);
    expect(window.history.state.page).toBe("entry1");
});

test('push to history: default', () => {
    let oldLength = window.history.length;
    pushToHistory('default', 1);
    let newLength = window.history.length;
    expect(newLength).toBe(oldLength + 1);
    let empty = {};
    expect(window.history.state).toStrictEqual(empty);
});