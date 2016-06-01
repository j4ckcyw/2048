import "babel-register"
import test from "ava"
import { hello } from "../../src/reducers/board"

test("dummy test passes", t => {
  t.is(hello(), "world")
  t.pass()
})
