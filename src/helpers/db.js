import { db } from "../services/firebase";

export function readRecipes() {
  let abc = [];
  db.ref("recipes").on("value", snapshot => {
    snapshot.forEach(snap => {
      abc.push(snap.val())
    });
    return abc;
  });
}


export function readComments() {
    let abc = [];
    db.ref("recipes").on("value", snapshot => {
      snapshot.forEach(snap => {
        abc.push(snap.val().comments())
      });
      return abc;
    });
  } 