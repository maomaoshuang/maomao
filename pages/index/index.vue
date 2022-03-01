<template>
	<view class="shou">
		<!-- 轮播图 -->
		<swiper autoplay indicator-dots interval='2000' indicator-active-color="red" circular>
			<swiper-item v-for="item in img" :key="item.goods_id">
				<image :src="item.img_url"></image>
			</swiper-item>
		</swiper>
		<!-- tabs切换栏 -->
		<view class="tabs">
			<u-tabs :list="list1" @click="click" :scrollable='false' lineWidth="30" lineHeight="3"
				itemStyle="height: 75rpx;padding-left:50rpx; padding-right: 50rpx">
				></u-tabs>
		</view>
		<!-- 主页面 -->
		<view class="zhu">
			  <u-row customStyle="margin-top: 20px" >
			                    <u-col span="6">
			                        <view>11</view>
			                    </u-col>
			                    <u-col span="6">
			                        <view>11</view>
			                    </u-col>
			                </u-row>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: '',
				list1: [{
					name: '默认',
				}, {
					name: '推荐',
				}, {
					name: '销量'
				}, {
					name: '最新'
				}],
			}
		},

		onLoad() {
			this.getSwipers()
		},
		methods: {
			click() {

			},
			async getSwipers() {

				const res = await this.$myRequest({
					url: 'https://api.shop.eduwork.cn/api/index'
				})
				this.img = res.data.slides


			},
		}
	}
</script>

<style lang="scss" scoped>
	.aaa {
		width: 60%;
		margin: auto;
		border: 1px solid #000000;
		height: 20px;
		overflow: hidden;


	}

	.shou {
		swiper {
			width: 750rpx;
			height: 300rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.tabs {
		display: flex;
		justify-content: space-around;
	}
.zhu{
	width: 100%;
	
	
}
</style>
