import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Playlist from "../components/Playlist/Playlist";

test("renders playlist component", () => {
    render(<Playlist playlistName="My Playlist" tracks={[]} />);
    expect(screen.getByText("My Playlist")).toBeInTheDocument();
});

test("allows renaming the playlist", () => {
    const mockOnNameChange = jest.fn();
    render(<Playlist playlistName="Test Playlist" onNameChange={mockOnNameChange} />);

    fireEvent.click(screen.getByText("Test Playlist"));

    const input = screen.getByPlaceholderText("Enter Playlist Name");
    fireEvent.change(input, { target: { value: "Updated Name" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockOnNameChange).toHaveBeenCalledWith("Updated Name");
});
