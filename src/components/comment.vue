<style type="text/css" scoped>
	.comt-mask {
		opacity: 0.5;
	}
	.comt-title {
		
	}
	.comt-line {
		width: 100%;
		height: 2px;
		background-color: #CCC;
		margin: 10px 0;
	}
	.comt-wrap {
		
	}
	.comt-user {
		float: left;
	}
	.comt-img {
		width: 34px;
		height: 34px;
		border-radius: 17px;
	}
	.comt-context {
		margin: 0 0 0 60px;
	}
	.comt-name {
		color: #2B879E;
		margin-bottom: 10px;
		font-size: 18px;
	}
</style>

<template>
	<div v-if="hasComment" :class="{'comt-mask': loading}">
		<h3 class='comt-title'>{{ totalCommentCount }}  条评论</h3>
		<div class="comt-line"></div>
		<div class="comt-wrap" v-for="comment of commentArr">
			<div class="comt-user">
				<img src='{{ comment.avatar }}' class="comt-img"/>
			</div>
			<div class="comt-context">
				<p class="comt-name">{{ comment.name }}</p>			
				<p>
					{{ comment.context }}
				</p>
			</div>
			<div class="comt-line"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import {getCommentData, getTotalCommentCount} from './getData';

	export default {
		props: {
			curPageIndex: {
				type: Number,
				default: 1,
			},
			eachPageSize: {
				type: Number,
				default: 7,
			},
			commentUrl: {
				type: String,
				default: '',
			},
			commentParams: {
				type: Object,
				default: null,
			},
			commentIsSync: {
				type: Boolean,
				default: true,
			},
		},
		data () {
			return {
				totalCommentCount: 0,
				hasComment: false,
				loading: true,			
			}
		},
		computed: {
			commentArr () {
				this.loading = true;
				let res =  getCommentData(this.commentUrl, this.commentParams, this.commentIsSync, this.curPageIndex, this.eachPageSize);
				this.loading = false;
				return res;
			},
		},
		created () {
			let cnt =  getTotalCommentCount(this.commentUrl, this.commentParams);
			this.totalCommentCount = cnt;
			this.hasComment = cnt > 0;
		}
	}
</script>