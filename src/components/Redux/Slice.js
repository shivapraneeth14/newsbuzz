import { createSlice, nanoid } from "@reduxjs/toolkit";

const Dataslice = createSlice({
    name: "data",
    initialState: {
        News: [],
    },
    reducers: {
        addnews: (state, action) => {
            const newNews = {
                id: nanoid(),
                title: action.payload.title,
                content: action.payload.content,
                imageurl: action.payload.imageurl,
            };

            state.News.push(newNews);
            
        }
    }
});

export const { addnews } = Dataslice.actions;
export default Dataslice.reducer;