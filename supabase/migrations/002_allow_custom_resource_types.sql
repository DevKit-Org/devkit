-- Allow custom resource types by removing the check constraint
-- This allows admins to add any custom type string

-- Drop the existing check constraint that limits types to predefined values
ALTER TABLE resources DROP CONSTRAINT IF EXISTS resources_type_check;

-- Add a new constraint that just ensures type is not empty (if desired)
-- Or leave it unconstrained to allow any text value
ALTER TABLE resources ADD CONSTRAINT resources_type_not_empty CHECK (type != '');
