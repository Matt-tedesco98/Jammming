import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Track from "../components/Track/Track";

test("renders track information", () => {
    const mockTrack = { name: "Song Name", artist: "Artist Name", album: "Album Name", id: "1" };
    render(<Track track={mockTrack} />);

    expect(screen.getByText("Song Name")).toBeInTheDocument();
    expect(screen.getByText("Artist Name | Album Name")).toBeInTheDocument();
});

test("calls onAdd when add button is clicked", () => {
    const mockTrack = { name: "Song Name", id: "1" };
    const mockOnAdd = jest.fn();

    render(<Track track={mockTrack} onAdd={mockOnAdd} isRemoval={false} />);

    fireEvent.click(screen.getByText("+"));
    expect(mockOnAdd).toHaveBeenCalledWith(mockTrack);
});

test("calls onRemove when remove button is clicked", () => {
    const mockTrack = { name: "Song Name", id: "1" };
    const mockOnRemove = jest.fn();

    render(<Track track={mockTrack} onRemove={mockOnRemove} isRemoval={true} />);

    fireEvent.click(screen.getByText("-"));
    expect(mockOnRemove).toHaveBeenCalledWith(mockTrack);
});
