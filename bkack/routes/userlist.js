const express = require('express');
const db = require('../db/db.js');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth(), (req, res) => {
    // 모든 유저들의 목록 출력

    db.query('SELECT id, userid, nickname, created, status, role FROM user',
        (error, result) => {
            if (error) throw error;
            res.status(200).json({
                'success': result
            });
        });
});

router.post('/search', auth(), (req, res) => {  // 유저의 id나 닉네임으로 검색
    db.query('SELECT id, userid, nickname, created, status, role FROM user WHERE userid = ? OR nickname = ?', [req.body.search, req.body.search],
        (error, result) => {
            if (error) throw error;
            if (result.length === 0) {
                res.status(200).json({
                    'success': result
                });
            } else {
                res.status(200).json({
                    'success': false
                });
            }
        });
});

let editWhom = null;  // Initialize the variable

router.post('/search/click', auth(), (req, res) => {  // 누구 수정할지 지칭
    db.query('SELECT id FROM user ',
        (error, result) => {
            if (error) throw error;
            if (result.length > 0) {
                editWhom = result[0].id;  // Set the variable for the user to edit
                res.status(200).json({
                    'success': result
                });
            } else {
                res.status(200).json({
                    'success': false
                });
            }
        });
});

router.put('/search/edit', auth(), (req, res) => {  // 수정하기 버튼 클릭 시 테이블에 있는 정보 전달
    let nickname, status, role;
    nickname = req.body.nickname;
    status = req.body.status;
    role = req.body.role;
    if (editWhom !== null) {
        db.query('UPDATE user SET nickname = ?, status = ?, role = ? where id = ?', [nickname, status, role, editWhom],
            (error, result) => {
                if (error) throw error;
                res.status(200).json({
                    'success': result
                });
            });
    } else {
        res.status(400).json({
            'success': false,
            'message': 'No user to edit'
        });
    }
});

module.exports = router;
