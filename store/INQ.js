const state = {
    billerdail:[],

}

const mutations = {
    GET_BILL(state,playload){
        state.billerdail = playload
    }

}

const actions = {

    async GETWALTERHISTORY({commit},data){
        const res = await this.$axios.get(`http://202.123.183.159:3000/test/api/clients/detail/${data.clid}`,{
            headers: {
                'Auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IlUyRnNkR1ZrWDEvRGpvRmZWRDZiR21LbzhHRmd3ZVRLRW9ROTIyclRpRm9peFZRUEU3aTl3dFprVUQ1dmdpZmd4NHhhN2JCSWhWN1p3dzd4ZENXV3VQR0NFV0kyTGltd2E4M1lmcU1nb3ZUYjNnbDJyRDc2aUhTTFA5YXVKM3J5dmI4d0R0TDRSVVN3M0xFTXRJbnZSUT09IiwiaWF0IjoxNjA1MjM5Mzc1LCJleHAiOjE2MDUzMjU3NzV9.Xbb9XpfdJkTBcGkN-Kj3D9LqB7JZkiPXKrJ5qNtmv4A'
              }
        })
        if(res.data['status'] == '200'){
            commit('GET_BILL',res.data['message'])
        }
    }

}

export {
    state,
    mutations,
    actions
}