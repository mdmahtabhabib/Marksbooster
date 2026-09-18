# Migrations

Empty for now — no schema changes have been made since the initial design.

When you alter a table (add a column, change a constraint, etc.), add a
new numbered file here with just that one change, e.g.
`001_add_role_to_students.sql` containing the `alter table` statement.
Never edit the files in `../schema/` retroactively — those describe the
schema as first created; migrations describe how it changed since.
