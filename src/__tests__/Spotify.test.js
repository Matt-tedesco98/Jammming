import Spotify from "../modules/Spotify";

describe("Spotify API Integration", () => {
    test("getAccessToken should return a token when available", () => {
        window.location.href = "http://localhost:3000/#access_token=mockToken&expires_in=3600";
        expect(Spotify.getAccessToken()).toBe("mockToken");
    });

    test("search function fetches tracks correctly", async () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        tracks: {
                            items: [
                                { id: "1", name: "Song 1", artists: [{ name: "Artist 1" }], album: { name: "Album 1" }, uri: "spotify:track:1" },
                            ],
                        },
                    }),
            })
        );

        const results = await Spotify.search("test");
        expect(results).toHaveLength(1);
        expect(results[0].name).toBe("Song 1");
    });

    test("savePlaylist should not execute with empty inputs", async () => {
        const result = await Spotify.savePlaylist("", []);
        expect(result).toBeUndefined();
    });
});
