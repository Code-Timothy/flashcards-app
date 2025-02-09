export const fetchExampleFlashcards = async () => {
    const response = await fetch("/flashcards-app/exampleFlashcards.json");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};