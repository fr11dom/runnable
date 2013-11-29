angular.module('RunnableMocks', ['ngMockE2E'])
	.run(function($httpBackend){
		/*** nav list***/
		navList = {
			status: 'ok',
			data:[
				{
					"url": "runnable",
					"value":"记录"
				}, 
				{
					"url": "about",
					"value":"关于我"
				}
			]
		}

		/*** article list***/
		articleList = {
			status: 'ok',
			data:[
				{
					"type":"css",
					"article":[
						{
							"id": 0,
							"title": "一道前端笔试题-图文混排",
							"url":"detail/css-pictxt",
							"dateTime": "2013-11-25 20:25"
						},
						{
							"id": 1,
							"title": "块级格式化上下文",
							"url":"detail/block-formatting-context",
							"dateTime": "2013-11-26 18:40"
						}
					]
				}
			]
		}
		//nav list
		$httpBackend.whenGET('/getNav').respond(200, navList);
		//article list
		$httpBackend.whenGET('/getList').respond(200, articleList);
		$httpBackend.whenGET(/.*/).passThrough();
	});