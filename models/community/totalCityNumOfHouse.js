// 全市关心房产的总人数
// 请求：date 年份或者月份 例如："2015","2015-10", 不传date则返回最新一个月数据
// 返回：当年每个月/某月的数据
var totalCityNumOfHouse = {
	code: "000",
	msg: "success",
	result: {
		time: ["2015-08","2015-09","2015-10",],
		people: [333333,3453,23132],
		avgprice: [30211,1312,324324],
	}
}

module.exports = totalCityNumOfHouse;