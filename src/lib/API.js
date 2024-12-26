import axios from "axios";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_LOCAL_URL}/api`
});

export const getSlider = () => instance.get("/slides?populate=*");
export const getSaveKids = () => instance.get("/savekid");