<style type="text/css" scoped>
	
</style>

<template>
	<comment :cur-page-index="curPageIndex" :each-page-size="eachPageSize" :comment-url="commentUrl" 
		:comment-params="commentParams" :comment-is-sync="commentIsSync">
		
	</comment>
	<page :cur-page-index.sync="curPageIndex" :each-page-size="eachPageSize" :page-url="pageUrl" 
		:page-params="pageParams" :page-is-sync="pageIsSync">

	</page>
</template>	

<script type="text/javascript">
	import Comment from './comment';
	import Page from './page';

	export default {
		data () {
			return {
				curPageIndex: 1,
				eachPageSize: 7,
			}
		},
		components: {
			comment: Comment,
			page: Page
		},
	}
</script>