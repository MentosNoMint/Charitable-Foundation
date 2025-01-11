import axios from "axios";

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_LOCAL_URL}/api`
});

export const getSlider = () => instance.get("/slides?populate=*");
export const getSaveKids = () => instance.get("/savekid");
export const getEmployees = () => instance.get("/employees?populate=*")
export const getGalleryKids = () => instance.get("/gallerykids?populate=*")
export const getProjects = () => instance.get("/projects?populate=*")
export const getSotrudnichestvos = () => instance.get("/sotrudnichestvos?populate=*")
export const getIvents = () => instance.get("/ivents?populate=*")
export const getFilms = () => instance.get("/films")
export const getArticles = () => instance.get("/articles")
export const getRubrics = () => instance.get("/rubrics?populate=*")
export const getQrCode = () => instance.get("/qr-code?populate=*")