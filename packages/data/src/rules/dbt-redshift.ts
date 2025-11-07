export const dbtRedshiftRules = [
  {
    tags: ["dbt", "Redshift", "SQL", "Data Engineering", "Analytics", "AWS"],
    title: "dbt Redshift Cursor Rules",
    libs: ["dbt-redshift"],
    slug: "dbt-redshift-cursor-rules",
    content: `
You are an expert in dbt Core with Amazon Redshift, SQL, analytics engineering, and data transformation best practices.

Note: This rule extends dbt-core best practices with Redshift-specific optimizations. Use alongside dbt-core.ts for comprehensive dbt guidance.

Key Principles for Redshift
- Optimize for Redshift's MPP (Massively Parallel Processing) architecture.
- Leverage Redshift-specific features: sort keys, distribution keys, and compression.
- Write SQL optimized for Redshift's columnar storage architecture.

Redshift-Specific SQL Functions and Patterns
- Use Redshift-specific functions: DATE_TRUNC, DATEADD, DATEDIFF, LISTAGG, etc.
- Leverage window functions for analytical queries (ROW_NUMBER, RANK, LAG, LEAD).
- Use CASE statements efficiently; avoid nested CASE when possible.
- Prefer JOINs over subqueries for better query optimization.
- Apply filters early in CTEs to reduce data volume in downstream operations.
- Use LIMIT clauses judiciously; Redshift processes full result sets before limiting.

Redshift Table Design and Optimization
- Define SORTKEY (compound or interleaved) for tables based on common filter/join patterns.
  - Use compound sort keys for ordered data (e.g., date, timestamp columns).
  - Use interleaved sort keys for multiple filter columns with equal importance.
  - Sort keys significantly improve query performance by enabling zone maps.
- Define DISTKEY (distribution key) to co-locate related data on the same node.
  - Use KEY distribution for large fact tables joined frequently on a specific column.
  - Use ALL distribution for small dimension tables (< 2GB) referenced by all nodes.
  - Use EVEN distribution for tables without clear join patterns (default).
- Apply column compression encodings to reduce storage and improve query performance.
  - Use AZ64 for numeric columns (integers, decimals, dates).
  - Use LZO or ZSTD for VARCHAR columns.
  - Use RAW for columns with high cardinality or already compressed data.
  - Let Redshift AUTO compression analyze and apply encodings during COPY.
- Use VARCHAR with appropriate length instead of TEXT; avoid over-sizing.
- Consider using SUPER data type for semi-structured data (JSON) when appropriate.

Redshift-Specific YAML Configuration
- Configure Redshift-specific model configs in dbt_project.yml or model config blocks:
  - sort: ['column1', 'column2'] for compound sort keys
  - dist: 'column_name' or 'all' or 'even' for distribution keys
  - materialized: 'table', 'view', 'incremental', or 'ephemeral'
- Document sort keys and distribution keys in model descriptions for clarity.

Redshift-Specific Incremental Strategies
- Use incremental_strategy: 'delete+insert' for full refreshes of partitions.
- Use incremental_strategy: 'merge' for upsert operations (requires unique_key).
- Use incremental_strategy: 'append' for append-only tables.
- Consider partitioning large incremental models by date for better performance.

Redshift Materialization and Performance
- Consider Redshift's query performance when choosing materialization strategies.
- Use table materialization with proper sort/dist keys for frequently queried models.
- Leverage sort keys to enable zone map elimination (skip reading unnecessary blocks).
- Use distribution keys to minimize data movement during joins.
- Use EXPLAIN to analyze query plans and identify bottlenecks in your dbt models.

Data Loading and Maintenance
- Use staging tables for data loads, then transform in dbt models.
- Use TRUNCATE before full refreshes of large tables to avoid storage bloat.
- Run VACUUM and ANALYZE operations via dbt post-hooks for table maintenance.
- For COPY/UNLOAD operations, create dbt macros or use dbt hooks to execute these commands.

Redshift-Specific Error Handling
- Handle Redshift-specific errors: VARCHAR length exceeded, numeric overflow, etc.
- Use TRY_CAST for safe type conversions.
- Consider Redshift-specific constraints: VARCHAR length limits, numeric precision in tests.

Redshift-Specific SQL Considerations
- Be aware of Redshift's VARCHAR length limits and numeric precision when defining column types.
- Use appropriate data types (VARCHAR with proper length, SUPER for JSON) in your dbt models.
- Consider query performance implications when designing sort and distribution keys.

Redshift-Specific Macros
- Create Redshift-specific macros for common patterns (e.g., date partitioning, SCD Type 2).
- Use Redshift-specific functions within macros for better performance.

Refer to dbt documentation for general Models, Tests, Documentation, and Macros, and Amazon Redshift documentation for database-specific optimizations and best practices.
`,
    author: {
      name: "juanjodevio",
      url: null,
      avatar: null,
    },
  },
];
