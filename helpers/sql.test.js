const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
    test("1 item partial update", function () {
        const result = sqlForPartialUpdate(
            { firstname: "greg" },
            { firstname: "first_name" }
        );
        expect(result).toEqual({
            setCols: '"first_name"=$1',
            values: ["greg"],
        });
    });

    test("2 item partial update", function () {
        const result = sqlForPartialUpdate(
            { firstname: "greg", lastname: "smith" },
            { firstname: "first_name", lastname: "last_name" }
        );
        expect(result).toEqual({
            setCols: '"first_name"=$1, "last_name"=$2',
            values: ["greg", "smith"],
        });
    });
});
