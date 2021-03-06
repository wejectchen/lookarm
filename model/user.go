package model

import (
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"log"
	"lookarm/utils/message"
)

type User struct {
	gorm.Model
	UserName string `gorm:"type:varchar(200);not null" json:"user_name"`
	Password string `gorm:"type:varchar(200);not null" json:"password"`
	Email    string `gorm:"type:varchar(200);not null" json:"email"`
}

// 增加管理员
func CreateUser(data *User) int {
	err = db.Create(&data).Error
	if err != nil {
		return message.ERROR
	}
	return message.SUCCESS
}

// 查询用户列表
func GetUsers(pageSize int, pageNum int) (int, []User, int64) {
	var users []User
	var total int64
	err = db.Select("id,user_name,email").Limit(pageSize).Offset((pageNum - 1) * pageSize).Find(&users).Error
	db.Model(&users).Count(&total)
	if err != nil {
		return message.ERROR, users, 0
	}
	return message.SUCCESS, users, total
}

// 查询单个用户
func GetUserInfo(id int) (User, int) {
	var user User
	err = db.Where("id = ?", id).First(&user).Error
	if err != nil {
		return user, message.ERROR
	}
	return user, message.SUCCESS
}

// 编辑用户
func (u User) EditUserInfo() int {

	err = db.Select("user_name", "email").Where("id = ?", u.ID).Updates(&u).Error
	if err != nil {
		return message.ERROR
	}
	return message.SUCCESS
}

// 删除用户
func (u User) DeleteUser() int {
	err = db.Where("id = ?", u.ID).Delete(&u).Error
	if err != nil {
		return message.ERROR
	}
	return message.SUCCESS
}

func (u *User) BeforeCreate(*gorm.DB) error {
	u.Password = SetPassword(u.Password)
	return nil
}

// 生成密码
func SetPassword(password string) string {
	const cost = 10

	HashPw, err := bcrypt.GenerateFromPassword([]byte(password), cost)
	if err != nil {
		log.Fatal(err)
	}
	return string(HashPw)
}

// 登录验证
func CheckLogin(username string, password string) (User, int) {
	var user User
	var PasswordErr error

	db.Where("user_name = ?", username).First(&user)

	PasswordErr = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(password))

	if user.ID == 0 {
		return user, message.ErrorUserNotExist
	}
	if PasswordErr != nil {
		return user, message.ErrorPasswordWrong
	}
	return user, message.SUCCESS
}
