import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: ''
}


export const signUpUser = createAsyncThunk('signupUser', async (body) => {
    const res = await fetch('http://3.13.184.127/rdms/api/v2/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return await res.json();
})

export const signInUser = createAsyncThunk('signInUser', async (body) => {
    const res = await fetch('http://3.13.184.127/rdms/api/v2/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    // return await res.json();
    console.log('res',res);
})

console.log('signInUser',signInUser);
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token")
        },
        addUser: (state, action) => {
            state.token = localStorage.getItem("user")
        },
        logout: (state, action) => {
            state.token=null
           localStorage.clear();
        }
    },
    extraReducers: {
        ///////////////////login//////////
        [signInUser.pending]: (state, action) => {
            state.loading = true
        },
        [signInUser.fulfilled]: (state, { payload: { error, msg,token,user } }) => {
            state.loading = false
            if(error){
                state.error=error;
            }else{
                state.msg=msg;
                state.token=token;
                state.user=user;
                localStorage.setItem('msg',msg)
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(user))
            }
        },
        [signInUser.rejected]: (state, action) => {
            state.loading = true
        },
        /////////////////////////////////////Sign In////////////////////////////////////
        [signUpUser.pending]: (state, action) => {
            state.loading = true
        },
        [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
            state.loading = false
            if (error) {
                state.error = error
            } else {
                state.msg = msg
            }
        },
        [signUpUser.rejected]: (state, action) => {
            state.loading = true
        }
    }
})
export const{addToken,addUser,logout}=authSlice.actions;
export default authSlice.reducer;