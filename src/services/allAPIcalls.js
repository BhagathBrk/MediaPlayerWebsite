
import commonAPI from "./commonAPI"
import serverUrl from "./serverURL"


// saveVideoAPI - post http request, add component

export const saveVideoApi = async (videoDetails)=>{
    return await commonAPI (`POST`, `${serverUrl}/uploadVideos`, videoDetails)
}

// getAllVideosAPI - get method, called view component, when component displayes in browser inside its useEffect hook

export const getAllVideosApi = async ()=>{
    return await commonAPI (`GET`, `${serverUrl}/uploadVideos`,"" )
}

// saveHistoryAPI 

export const saveHistoryAPI = async (historyDetails)=>{
    return await commonAPI(`POST`, `${serverUrl}/history`, historyDetails)
}

// getAllhistotyAPI - get http request to https history - called by history component when it open in browser

export const getAllHistoryAPI = async ()=>{
    return await commonAPI (`GET`, `${serverUrl}/history`, "")
}


export const deleteHistoryApi = async (id)=>{
    return await commonAPI(`DELETE`, `${serverUrl}/history/${id}`, {})
}

export const removeVideoApi = async (id) => {
    return await commonAPI(`DELETE`, `${serverUrl}/uploadVideos/${id}`, {})
}

// save category 

export const saveCategoryApi = async (categoryDetails) =>{
    return await commonAPI(`POST`, `${serverUrl}/categories`, categoryDetails)
}


export const getAllCategoryApi = async ()=>{
    return await commonAPI(`GET`, `${serverUrl}/categories`, {})
}


export const deleteCategoryApi = async  (id) => {
    return await commonAPI(`DELETE`, `${serverUrl}/categories/${id}`, {})
}

// updateCategory api

export const updateCategoryApi = async  (categoryDetails) => {
    return await commonAPI(`PUT`, `${serverUrl}/categories/${categoryDetails.id}`,categoryDetails )
}
