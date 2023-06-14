exports.setPostSupports = function setPostSupports(app, pool, SpellsCosts) {


    //get tanks that could protect 
    app.post("/getTanks", (req, res) => {
        //receive id and team
        pool.getConnection(function (err, connection) {
            connection.query(
                "SELECT * FROM student WHERE team = '" +
                req.body.team +
                "' AND id != '" +
                req.body.id +
                "' AND class = 'tank' AND mana >= '" +
                SpellsCosts.get("protection") +
                "'",
                function (err, result, fields) {
                    if (err) throw err;
                    res.send(result);
                }
            );
        });
    });

    //get healers that could revive
    app.post("/getHealers", (req, res) => {
        //receive id and team
        pool.getConnection(function (err, connection) {
            connection.query(
                "SELECT student.* FROM student, owned_item WHERE student.team = '" +
                req.body.team +
                "' AND student.id != '" +
                req.body.id +
                "' AND student.class = 'healer' AND mana >= '" +
                SpellsCosts.get("reviviscence") +
                "' AND owned_item.student_id = student.id AND owned_item.item_name = 'reviviscence'",
                function (err, result, fields) {
                    if (err) throw err;
                    res.send(result);
                }
            );
        });
    });


    //get mages that could use truquage_du_destin
    app.post("/getMages", (req, res) => {
        //receive id and team
        pool.getConnection(function (err, connection) {
            connection.query(
                "SELECT student.* FROM student, owned_item WHERE student.team = '" +
                req.body.team +
                "' AND student.mana >= '" +
                SpellsCosts.get("truquage_du_destin") +
                "' AND owned_item.student_id = student.id AND owned_item.item_name = 'truquage_du_destin'",
                function (err, result, fields) {
                    if (err) throw err;
                    res.send(result);
                }
            );
        });
    });
};