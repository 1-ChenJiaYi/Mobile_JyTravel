// export const getAssetURL = (image) => {
//     // 参数一: 相对路径
//     // 参数二: 当前路径的URL
//     console.log(new URL(`../../assets/img/${image}`, import.meta.url.split('?')[0]).href)
//     return new URL(`../../assets/img/${image}`, import.meta.url.split('?')[0]).href
//   }

// 其它实现方式：
// export const getAssetURL = (image) => {
//   // console.log(`${import.meta.env.BASE_URL}src/assets/img/${image}`)
//   return `${import.meta.env.BASE_URL}src/assets/img/${image}`
// }


// ✅ 正确写法
// export const getAssetURL = (image) => {
//   return new URL(`../assets/img/${image}`, import.meta.url.split('?')[0]).href
// }

export const getAssetURL = (image) => {
    // 开发环境使用动态路径
    return new URL(`../assets/img/${image}`, import.meta.url.split('?')[0]).href
}

// export const getAssetURL = (image) => {
//   return new URL(`../assets/img/${image}`, import.meta.url).href
// }