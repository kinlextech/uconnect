export const state = () => {
    return {
        billerdail:[]
    }
  }

  export const  mutations = {
    GET_BILL(state,playload){
        state.billerdail = playload
    }

}

export const  actions = {

    async GETWALTERHISTORY({commit},data){
        const res = await this.$axios.get(`http://202.123.183.159:3000/test/api/clients/detail/${data.clid}`,{
            headers: {
                'Auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDErbFlDSFR5YmwwTWlhNEs3dllUSkU0bjMwdk51cXBzcVVMSTY3SXZyNFl6S1FpbXhXTCtqZE92MnlMK2JyT3dLZEYyRG9ETFRZS0Y4bkk1SFhPVzVSdTh1TDVZN0tWRFhDYWNOajVhUS9ldWpaaXgyVnRqaG9rM1l3Y0NDMS9ZSTh4ZXRkSEM1TG9qUT09IiwiaWF0IjoxNjA1NDY5NDE4LCJleHAiOjE2MDU1NTU4MTh9.n70ucPyKpNApGXtRHf0eT0gf-1fasgfAOmr2BaI27SY'
              }
        })
        if(res.data['status'] == '200'){
            commit('GET_BILL',res.data['message'])
        }
    }

}