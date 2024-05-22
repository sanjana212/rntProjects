useEffect(() => {
    if(localStorage.getItem("corpUname") && localStorage.getItem("corpPass")){
    setShowLoader(true)
    var corpUname = localStorage.getItem("corpUname")
    var corpPass = localStorage.getItem("corpPass")
    settoggleUi(false)
    let obj = {
      userId: corpUname,
      password: corpPass,
      fromCorp: true
    }
    console.log("obj", obj);
    try {
       fetch(Url.Login, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(obj)
      }).then((response) => response.json())
        .then(async (res) => {
          console.log("res", res);
          setmessage(res?.MESSAGE)
          if (res.SUCCESS) {
            let token = res?.TOKEN
            sessionStorage.setItem('token', token)
            let tokenObj = {
              token: res?.TOKEN
            }
            // localStorage.clear()
            localStorage.removeItem("corpPass");
            // let Bearer = 'Bearer ' + res.TOKEN;
            try {
              await fetch(Url.tokenparse, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(tokenObj)
              }).then((response) => response.json())
                .then((res) => {
                  console.log("res2", res)
                  sessionStorage.setItem("fullname", res?.fullName)
                  sessionStorage.setItem("StaffId", res?.staffId)
                  sessionStorage.setItem("emailId", res?.emailId)
                  sessionStorage.setItem("role", res?.role)
                  if(res?.role == "Don't Have Role" ){
                    handleOpenRoleErrorModal()
                    settoggleButton(true)
                  }else{
                    settoggleButton(false)
                    history.push({ pathname: "/main/dashboard" });
                  }
                  setShowLoader(false)
                })
            } catch (error) {
              console.log(error);
              setShowLoader(false)
            } 
          }
          else {
            setShowLoader(false)
            handleOpenModal()
          }
        })
    }
    catch (error) {
      handleOpenModal()
      setShowLoader(false)
      console.log(error);
    }
  }else{
    settoggleUi(true)
  }
  }, [])