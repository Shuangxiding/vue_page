<style type="text/css" scoped>
	.page {
		text-align: center;
		margin: 30px;
	}
	.page-btn {
		color: gray;
		background-color: white;
		border: white;
		width: 30px;
		height: 30px;
		margin: 5px;
		font-size: 18px;
		outline: none;
	}
	.page-btn-link {
		cursor: Crosshair;
	}
	.page-btn-active {
		border: 1px solid gray;
		border-radius: 15px;
	}
</style>

<template>
	<div class="page">
		<button v-for="pageIndex of pageArr" track-by='$index' :class="{'page-btn': true, 'page-btn-active': 
			this.curPageIndex === pageIndex, 'page-btn-link': checkNum(pageIndex)}" 
			@click="clickPage(pageIndex)" >
				{{ pageIndex }}
		</button>		
	</div>
</template>

<script type="text/javascript">
	import {getTotalPageCount} from './getData';

	export default {
		props: {
			totalPageCount: {
				type: Number,
				default: 0,
			},
			curPageIndex: {
				type: Number,
				default: 1,
			},
			eachPageSize: {
				type: Number,
				default: 7,
			},
			pageAjcn: {
				type: Number,
				default: 4,
			},
			pageUrl: {
				type: String,
				default: '',
			},
			pageParams: {
				type: Object,
				default: null,
			},
			pageIsSync: {
				type: Boolean,
				default: true,
			}						
		},
		data () {
			return {

			}
		},
		computed: {
			pageArr () {
				let st = 1,
					end = this.totalPageCount,
					cur = this.curPageIndex,
					ajcn = this.pageAjcn,
					arr = [],
					left = Math.floor(ajcn / 2),
					right = ajcn - left;
					
				if (end == 0 || cur == 0) {
					return arr;
				} else {
					console.log(st, end, cur, left, right);
					arr.push(st);
					console.log(st+1, cur-left);
					if (st + 1 < cur - left) {
						arr.push('...');
					}
					for (let i = Math.max(cur - left, st + 1); i <= cur - 1; ++i) {
						arr.push(i);
					}
					if (cur != st) {
						arr.push(cur);
					}
					for (let i = cur + 1; i <= cur + right && i <= end - 1 ; ++i) {
						arr.push(i);
					}
					if (cur + right < end - 1) {
						arr.push('...');
					}
					if (end != cur) {
						arr.push(end);
					}
					return arr;
				}	
			}
		},
		methods: {
			clickPage (curIndex) {
				if (Number.isInteger(curIndex)) {
					this.curPageIndex = curIndex;
				}
			},
			checkNum (curIndex) {
				return Number.isInteger(curIndex);
			}			
		},
		created () {
		    this.totalPageCount = getTotalPageCount(this.pageUrl, this.pageParams, this.pageIsSync, 
		    	this.eachPageSiz);
		}
	}
</script>