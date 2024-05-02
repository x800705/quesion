const commoneUrl = "http://154.12.26.163:5000/"

export default {
  // 假设你有一个获取用户信息的API
  get(url) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: commoneUrl + url, // 替换为你的API地址
		timeout:2000,
        method: 'GET',
        success: (res) => {
          
            resolve(res); // 解析并返回成功的数据
          
        },
        fail: (error) => {
			uni.showToast({
			 		title: '服务器繁忙，请稍后再试。。。',  
			 		icon: 'none', // 可以是 'success', 'loading', 'none'  
			 		duration: 1000 // 持续展示时间，单位 ms  
			 	});
			
          reject(error); // 网络请求失败
        }
      });
    });
  },
  
  showToast(title){
	  uni.showToast({
	      title: title,  
	      icon: 'none', // 可以是 'success', 'loading', 'none'  
	      duration: 2000 // 持续展示时间，单位 ms  
	  });
  }
}