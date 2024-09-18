import apiRequest from "./apiRequest"

export const singlePageLoader = async({request, params})=>{
    const res = await apiRequest('/project/post/'+params.id)
    return (res.data);
}; 