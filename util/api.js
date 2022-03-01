// const URL = 'https://api-hmugo-web.itheima.net';
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:options.url,
			method:options.method || 'GET',
			data:options.data || {},
			success: (res) => {
				if(res.data.statusCode==200){
					return uni.showToast({
						title:'获取数据成功'
					})
			 	}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:'获取数据失败'
				})
				reject(err)
			}
			
		})
	})
}