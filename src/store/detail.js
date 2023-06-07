import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import { result } from "lodash";
//封装游客身份模块uuid--->生成一个随机字符串（不能在变了）
import {getUUID} from "@/utils/uuid_token"
const state = {
    goodInfo: {},
    //游客的临时身份
    uuid_token:getUUID()
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
};
const actions = {
    //获取产品信息action
    async getGoodInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code == 200) {
            commit('GETGOODINFO', result.data)
        }
    },
    //    产品添加到购物车中||修改某一个产品的个数
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    //加入购物车返回的结构
    //注意：async函数执行返回的结果一定是一个promise[成功|失败]
    //加入购物车以后（发请求），前台将参数带给服务器
    //服务器写入数据成功，并没有返回其他数据，只是返回code=200，代表这次操作成功
    //因为服务器没有返回其余数据，因此不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        // 当前这个函数如果执行返回Promise
         //服务器存储成功---进行路由跳转传递参数
      if(result.code==200){
        return  "ok"
         //失败，给用户进行提示
      }else{
        return Promise.reject(new Error('faile'))
      }
        }
    
};
//简化数据而生
const getters = {
    //路径导航简化的数据
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    }
};
export default {
    state,
    actions,
    mutations,
    getters
}