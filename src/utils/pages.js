export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalCount) => {
    let totalPages = []
    for (let i = 0; i < totalCount; i++) {
        totalPages.push(i+1)
      }
    return totalPages;
} 