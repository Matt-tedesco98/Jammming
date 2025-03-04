import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../components/App/App";

test("renders Jammming app", () => {
    render(<App />);
    expect(screen.getByText(/Jammming/i)).toBeInTheDocument();
});

test("adds a track to the playlist", () => {
    render(<App />);

    const addButton = screen.getAllByText("+")[0];
    fireEvent.click(addButton);

    expect(screen.getByText("Blinding Lights")).toBeInTheDocument();
});

test("removes a track from the playlist", () => {
    render(<App />);

    const addButton = screen.getAllByText("+")[0];
    fireEvent.click(addButton);

    const removeButton = screen.getAllByText("-")[0];
    fireEvent.click(removeButton);

    expect(screen.queryByText("Blinding Lights")).not.toBeInTheDocument();
});

test("renames the playlist", () => {
    render(<App />);

    const title = screen.getByText("New Playlist");
    fireEvent.click(title);

    const input = screen.getByPlaceholderText("Enter Playlist Name");
    fireEvent.change(input, { target: { value: "My Custom Playlist" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(screen.getByText("My Custom Playlist")).toBeInTheDocument();
});

test("saves playlist and resets the list", () => {
    render(<App />);

    const addButton = screen.getAllByText("+")[0];
    fireEvent.click(addButton);

    const saveButton = screen.getByText("Save Playlist");
    fireEvent.click(saveButton);

    expect(screen.queryByText("Blinding Lights")).not.toBeInTheDocument();
});
