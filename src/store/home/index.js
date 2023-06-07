import { reqCategoryList,reqGetBannerList,reqFloorList } from "@/api";
//home模块小仓库
const state = {
    //state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化】
    peiqi:[],
    //轮播图数据
    bannerList:[],
    //floor组件的数据
    floorlist:[]
};
const mutations = {
  PEIQI(state,peiqi){
             state.peiqi = peiqi;
  },
  BANNERLIST(state,bannerList){
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state,floorlist){
    state.floorlist = floorlist;
  }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async peiqi({commit}){
    let result= await reqCategoryList();
    // console.log(result);
    if(result.code==200){
        commit("PEIQI",result.data)
    }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
      let result = await reqGetBannerList();
      if(result.code==200){
        commit("BANNERLIST",result.data)
      }
    },
    //获取floor数据
    async getFloorList({commit}){
      let result = await reqFloorList();
      if(result.code==200){
        //提交mutation
        commit("GETFLOORLIST",result.data)
      }
    }
};
//计算属性
const getters ={};
export default {
    state,
    mutations,
    actions,
    getters
}