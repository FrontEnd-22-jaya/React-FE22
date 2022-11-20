export const BOOKMARK_JOBS = "BOOKMARKS_JOBS"

export const addToBookmark = (bookmark) =>{
    return({
        type: BOOKMARK_JOBS,
        payload: bookmark
    }) 
}