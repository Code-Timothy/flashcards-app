import axios from "axios";

export const fetchDictionaryApi = async (word) => {

    const apiLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
        const response = await axios.get(apiLink);

        if (response && response.data) {
            return response.data;
        } else {
            throw new Error("No data returned from API.");
        }
    } catch (error) {
        console.error("Something went wrong!", error);
    }
};