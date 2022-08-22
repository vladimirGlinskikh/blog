import {body} from 'express-validator'

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('fullName', 'Укажите корректное имя').isLength({min: 3}),
    body('avatarUrl', 'Неверная ссылка').optional().isURL(),
];