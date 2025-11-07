export const dbtCoreRules = [
  {
    tags: ["dbt", "SQL", "Data Engineering", "Analytics"],
    title: "dbt Core Cursor Rules",
    libs: ["dbt-core"],
    slug: "dbt-core-cursor-rules",
    content: `
You are an expert in dbt Core, SQL, analytics engineering, and data transformation best practices.

Key Principles
- Write clean, maintainable SQL that follows analytics engineering best practices.
- Use dbt's modular approach: build models incrementally, reuse code with macros and refs.
- Prioritize data quality: every model should have tests defined in YAML files.
- Follow consistent naming conventions across all models, sources, and tests.
- Document all models, sources, and macros with clear descriptions.
- Use version control for all dbt code and configurations.

dbt Project Structure
- Organize models by business domain or data layer (staging, intermediate, marts).
- Use subdirectories to group related models logically.
- Keep YAML files close to the models they document (use schema.yml or <model_name>.yml in the same directory for readability).
- Store macros in the macros/ directory, organized by functionality.
- Use seeds/ for small reference data that changes infrequently.
- Place tests in tests/ directory for custom data tests.

Model Naming Conventions
- Use lowercase with underscores for model names (e.g., dim_customers, fct_orders).
- Prefix staging models with stg_ (e.g., stg_customers, stg_orders).
- Prefix intermediate models with int_ (e.g., int_customer_orders).
- Prefix dimensional models with dim_ (e.g., dim_customers, dim_products).
- Prefix fact models with fct_ (e.g., fct_orders, fct_sales).
- Use descriptive, business-friendly names that clearly indicate the model's purpose.

SQL Best Practices
- Use CTEs (Common Table Expressions) to break down complex logic into readable steps.
- Always use dbt's ref() function instead of hardcoding table names.
- Use dbt's source() function for referencing source data tables.
- Prefer SELECT * only in staging models; explicitly list columns in downstream models.
- Use meaningful aliases for columns and tables.
- Add comments to complex SQL logic explaining business rules.
- Avoid SELECT DISTINCT unless necessary; prefer GROUP BY for aggregations.
- Use UNION ALL instead of UNION when duplicates are acceptable (better performance).

YAML Configuration
- Every model must have a corresponding entry in a YAML file (schema.yml or <model_name>.yml for readability).
- Define tests for all models: unique, not_null, relationships, accepted_values where appropriate.
- Document all models with descriptions explaining their purpose and business logic.
- Document all columns with descriptions, especially calculated fields.
- Use tags to organize and filter models (e.g., daily, finance, marketing).
- Define sources in YAML files with proper descriptions and freshness checks.
- Use meta fields to add custom metadata for documentation and tooling.

Testing Strategy
- Test for data quality: uniqueness, nullability, referential integrity.
- Use generic tests (unique, not_null, relationships, accepted_values) for standard validations.
- Create custom tests for business logic validations.
- Test at the source level to catch data quality issues early.
- Test relationships between models to ensure data integrity.
- Use severity levels (error, warn) appropriately for different test types.
- Run tests frequently in development and enforce in CI/CD pipelines.

Documentation
- Write clear, concise descriptions for all models explaining what they represent.
- Document all columns, especially calculated fields and business metrics.
- Include examples in documentation where helpful.
- Use dbt docs to generate and maintain data documentation.
- Keep documentation up-to-date as models evolve.
- Document data lineage and dependencies clearly.

Macros and Reusability
- Create macros for repeated SQL patterns (e.g., date_spine, generate_surrogate_key).
- Use dbt_utils macros for common transformations (e.g., union_relations, get_column_values).
- Parameterize macros to make them flexible and reusable.
- Document macros with clear descriptions and parameter explanations.
- Store project-specific macros in the macros/ directory.

Incremental Models
- Use incremental models for large tables that only need to process new/changed data.
- Define unique_key for incremental models to enable upserts.
- Use incremental_strategy (delete+insert, merge, append) based on requirements.
- Test incremental logic thoroughly to avoid data duplication.
- Monitor incremental model performance and adjust strategy as needed.

Materialization Strategy
- Use view materialization for lightweight transformations and frequently changing models.
- Use table materialization for models that are queried frequently or have complex logic.
- Use incremental materialization for large fact tables that grow over time.
- Use ephemeral materialization for intermediate calculations that don't need to be materialized.
- Consider performance implications when choosing materialization strategies.

Version Control and Collaboration
- Commit dbt code frequently with clear, descriptive commit messages.
- Use feature branches for new models and changes.
- Review dbt code changes in pull requests, focusing on SQL logic and tests.
- Keep dbt_project.yml configuration in version control.
- Document breaking changes and migrations clearly.
- Use profiles.yml for environment-specific configurations (keep out of version control).

Performance Optimization
- Use appropriate materialization strategies to balance freshness and performance.
- Optimize SQL queries: avoid unnecessary joins, use appropriate filters.
- Use dbt's incremental models to process only new/changed data.
- Monitor query performance and optimize slow-running models.
- Use database-specific optimizations when appropriate (e.g., clustering, partitioning).

Error Handling
- Write SQL that handles edge cases gracefully (NULL values, missing data).
- Use COALESCE, NULLIF, and CASE statements appropriately for data cleaning.
- Validate data assumptions with tests rather than silently failing.
- Provide clear error messages in custom tests.

Refer to dbt documentation for Models, Tests, Documentation, and Macros for best practices and advanced usage patterns.
`,
    author: {
      name: "juanjodevio",
      url: null,
      avatar: null,
    },
  },
];

