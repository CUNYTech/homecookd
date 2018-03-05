
###   /auth/register/user -
####  input: ``` "email" : String, "password" : String, "name" : String, "userName": String ```
##### output: ```created: res.status(201) ``` or ```error: res.status(400); ```
###### NOTE: password has to be at least 6 digits and contain at least one lower case and one upper case letter.
###### NOTE: username has to be between 3 to 15 digits and can contain letter, number, "." and "-"

###   /auth/register/seller -
####  input: ``` "email" : String, "password" : String, "name" : String, "userName": String ```
##### output: ```created: res.status(201) ``` or ```error: res.status(400); ```
###### NOTE: password has to be at least 6 digits and contain at least one lower case and one upper case letter.
###### NOTE: username has to be between 3 to 15 digits and can contain letter, number, "." and "-"

###   /loginSeller -
####  input: ``` "email" : String, "password" : String, ```
##### output: ```created: res.status(201) ``` or ```error: res.status(400); ```

###   /loginUser -
####  input: ``` "email" : String, "password" : String, ```
##### output: ```created: res.status(201) ``` or ```error: res.status(400); ```




