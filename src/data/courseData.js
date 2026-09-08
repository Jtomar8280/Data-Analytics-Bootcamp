const courseData = [
  {
    id: 1,
    week: "Week 1",
    title: "Analytics Foundations",
    description:
      "Build a strong foundation in data analytics, business questions, KPIs, data sources, data cleaning and basic sales analysis.",
    deliverable: "Mini Sales Analysis",

    days: [
      {
        id: 1,
        title: "Data Analytics & Data Analyst Role",

        learn: [
          "What is data and information",
          "What is Data Analytics",
          "Role and responsibilities of a Data Analyst",
          "Data Analyst workflow",
          "Data Analyst vs Data Scientist",
          "Data Analyst vs Business Analyst",
        ],

        businessApplication: [
          "Understand how businesses use data to solve problems",
          "Investigate declining sales through monthly sales, product, customer and regional analysis",
        ],

        practicalActivity: [
          "Identify the business problem",
          "Identify the required data",
          "Determine what should be analyzed",
          "Suggest a possible business decision",
        ],

        outcome:
          "Understand what a Data Analyst does and how data supports business decisions.",
      },

      {
        id: 2,
        title: "Data Types & Data Structures",

        learn: [
          "Structured data",
          "Semi-structured data",
          "Unstructured data",
          "Qualitative and quantitative data",
          "Categorical and numerical data",
        ],

        businessApplication: [
          "Identify different types of business data",
          "Understand how data is organized in Excel, SQL databases and CSV files",
        ],

        practicalActivity: [
          "Classify different business datasets",
          "Identify appropriate data types for analytical tasks",
        ],

        outcome: "Classify business data correctly.",
      },

      {
        id: 3,
        title: "Data Sources",

        learn: [
          "Internal data sources",
          "External data sources",
          "Databases",
          "Excel",
          "CSV",
          "APIs",
          "Surveys",
          "Websites",
        ],

        businessApplication: [
          "Identify where business data comes from",
          "Understand data collection",
        ],

        practicalActivity: [
          "Identify possible data sources for a business problem",
          "Compare different data collection methods",
        ],

        outcome: "Understand common business data sources.",
      },

      {
        id: 4,
        title: "Data Analytics Lifecycle",

        learn: [
          "Business understanding",
          "Data collection",
          "Data preparation",
          "Data analysis",
          "Data visualization",
          "Decision-making",
        ],

        businessApplication: [
          "Connect a business problem with an analytics process",
        ],

        practicalActivity: [
          "Map a business problem through the complete analytics lifecycle",
        ],

        outcome: "Understand the complete data analytics lifecycle.",
      },

      {
        id: 5,
        title: "Business Questions, KPIs, Dimensions & Measures",

        learn: [
          "Business questions",
          "Metrics",
          "KPIs",
          "Dimensions",
          "Measures",
        ],

        businessApplication: [
          "Convert business requirements into measurable questions",
        ],

        practicalActivity: [
          "Identify KPIs for a sales business problem",
          "Separate dimensions from measures",
        ],

        outcome: "Identify analytical requirements.",
      },

      {
        id: 6,
        title: "Data Cleaning Basics",

        learn: [
          "Missing values",
          "Duplicate records",
          "Incorrect formats",
          "Inconsistent values",
          "Data validation",
        ],

        businessApplication: [
          "Prepare a raw sales dataset for analysis",
        ],

        practicalActivity: [
          "Identify missing values",
          "Find duplicate records",
          "Standardize inconsistent values",
          "Validate the cleaned dataset",
        ],

        outcome: "Clean basic business data.",
      },

      {
        id: 7,
        title: "Mini Sales Analysis + Revision",

        learn: [
          "Combine Week 1 concepts",
          "Analyze sales data",
          "Generate business insights",
        ],

        businessApplication: [
          "Perform an end-to-end basic sales analysis",
        ],

        practicalActivity: [
          "Analyze sales performance",
          "Identify important trends",
          "Write business insights",
          "Provide recommendations",
        ],

        outcome: "Complete a basic sales analysis.",
      },
    ],
  },

  {
    id: 2,
    week: "Week 2",
    title: "Excel Fundamentals",
    description:
      "Build practical Excel skills for business data preparation, formulas, lookups and analysis.",
    deliverable: "Excel Exercises + Lookup Challenge",

    days: [
      {
        id: 1,
        title: "Excel Basics + Tables",

        learn: [
          "Workbook, worksheet, rows, columns, cells, ranges and formatting",
          "Relative, absolute and mixed cell references",
          "Excel Tables, table names, structured references and filtering",
        ],

        businessApplication: [
          "Prepare business datasets",
          "Create a sales table containing Order ID, Order Date, Customer, Product, Category, Region, Quantity, Sales and Profit",
        ],

        practicalActivity: [
          "Convert raw sales data into an Excel Table",
        ],

        outcome:
          "Understand how to organize business data in Excel.",
      },

      {
        id: 2,
        title: "Sorting, Filtering & Data Validation",

        learn: [
          "Sorting by Sales, Profit, Date, Customer and Region",
          "Filters and custom filters",
          "Removing duplicates",
          "Data validation and controlled data entry",
        ],

        businessApplication: [
          "Find and organize business records",
          "Answer questions such as showing West-region orders above a sales threshold",
        ],

        practicalActivity: [
          "Sort and filter a sales dataset",
          "Identify duplicate order IDs and customers",
          "Create Region and Category dropdown validation",
        ],

        outcome:
          "Efficiently organize and filter business datasets.",
      },

      {
        id: 3,
        title: "Basic & Logical Formulas",

        learn: [
          "SUM, AVERAGE, COUNT, COUNTA, MIN, MAX and ROUND",
          "IF, IFS, AND, OR and IFERROR",
          "Business classification logic",
        ],

        businessApplication: [
          "Calculate sales and classify performance",
          "Create High, Medium and Low sales categories",
        ],

        practicalActivity: [
          "Create a performance category for every sales record",
        ],

        outcome:
          "Calculate and classify business data using Excel formulas.",
      },

      {
        id: 4,
        title: "SUMIFS + COUNTIFS",

        learn: [
          "SUMIF and SUMIFS",
          "COUNTIF and COUNTIFS",
          "Conditional calculations using multiple criteria",
        ],

        businessApplication: [
          "Analyze sales by region, category and product",
          "Answer multi-condition business questions",
        ],

        practicalActivity: [
          "Calculate sales for a category and region combination",
          "Count records matching multiple criteria",
        ],

        outcome: "Perform multi-condition analysis.",
      },

      {
        id: 5,
        title: "Text + Date Functions",

        learn: [
          "Text manipulation functions",
          "Date extraction and date-based analysis",
          "Cleaning customer and product text",
        ],

        businessApplication: [
          "Clean customer and product data",
          "Analyze business performance across time periods",
        ],

        practicalActivity: [
          "Standardize text values",
          "Extract useful date parts for analysis",
        ],

        outcome: "Work confidently with text and dates.",
      },

      {
        id: 6,
        title: "XLOOKUP + VLOOKUP",

        learn: [
          "Lookup value and table array concepts",
          "Exact and approximate matching",
          "XLOOKUP and VLOOKUP",
        ],

        businessApplication: [
          "Connect customer, product and employee tables",
          "Retrieve information from related business datasets",
        ],

        practicalActivity: [
          "Perform customer and product lookups",
        ],

        outcome:
          "Connect multiple business tables using lookup functions.",
      },

      {
        id: 7,
        title: "Excel Case Study + Revision",

        learn: [
          "Combine formulas and lookup concepts",
          "Business analysis workflow",
        ],

        businessApplication: [
          "Complete sales and customer analysis across Sales, Customers and Products tables",
        ],

        practicalActivity: [
          "Convert datasets into Excel Tables",
          "Clean and validate data",
          "Calculate Total, Average, Maximum and Minimum Sales",
          "Use SUMIFS/COUNTIFS",
          "Use XLOOKUP/VLOOKUP",
          "Identify top-performing Product, Category, Customer and Region",
        ],

        outcome:
          "Solve an end-to-end Excel business analysis problem.",
      },
    ],
  },

  {
    id: 3,
    week: "Week 3",
    title: "Advanced Excel + Power Query",
    description:
      "Move from basic Excel analysis into PivotTables, dashboards and Power Query transformations.",
    deliverable: "Excel Sales Dashboard",

    days: [
      {
        id: 1,
        title: "PivotTables",

        learn: [
          "Rows, columns, values and filters",
          "Grouping, sorting and aggregation",
          "Summarizing large datasets",
        ],

        businessApplication: [
          "Sales by region",
          "Sales by category",
          "Profit by product",
          "Orders by month",
          "Sales by customer",
        ],

        practicalActivity: [
          "Create five PivotTables from the sales dataset",
        ],

        outcome:
          "Learn how to summarize business data efficiently.",
      },

      {
        id: 2,
        title: "PivotCharts",

        learn: [
          "PivotChart fundamentals",
          "Column, bar, line and pie/donut charts",
          "Choosing charts for comparisons and trends",
        ],

        businessApplication: [
          "Monthly sales trend",
          "Top 10 products",
          "Sales by region",
          "Sales by category",
        ],

        practicalActivity: [
          "Create a Monthly Sales Chart",
          "Create Sales by Region",
          "Create Sales by Category",
          "Create Top 10 Products",
        ],

        outcome:
          "Convert summarized data into meaningful visualizations.",
      },

      {
        id: 3,
        title: "Slicers + Interactive Analysis",

        learn: [
          "Slicers",
          "Timelines",
          "Interactive filtering and dashboard exploration",
        ],

        businessApplication: [
          "Allow management to explore sales by Region, Category, Product and Customer Segment",
        ],

        practicalActivity: [
          "Create Region slicer",
          "Create Category slicer",
          "Create Year slicer",
          "Create Month timeline",
        ],

        outcome:
          "Create interactive business reports.",
      },

      {
        id: 4,
        title: "Dashboard Design",

        learn: [
          "KPI cards",
          "Dashboard layout and visual hierarchy",
          "Business storytelling",
          "Choosing meaningful visuals",
        ],

        businessApplication: [
          "Build a management-ready dashboard",
          "Answer how much is selling, profitability, regional performance, product performance and trend questions",
        ],

        practicalActivity: [
          "Create the structure/wireframe of the final Sales Dashboard",
        ],

        outcome:
          "Understand professional dashboard design.",
      },

      {
        id: 5,
        title: "Power Query Fundamentals",

        learn: [
          "Power Query Editor",
          "Importing Excel and CSV data",
          "Applied Steps, Queries and Refresh",
          "Removing rows/columns, duplicates, renaming columns, changing data types and filtering",
        ],

        businessApplication: [
          "Automate repeatable data preparation instead of cleaning the same dataset manually",
        ],

        practicalActivity: [
          "Import a raw sales CSV file and clean it using Power Query",
        ],

        outcome:
          "Understand automated data preparation.",
      },

      {
        id: 6,
        title: "Merge + Append + Transformations",

        learn: [
          "Merge and Append concepts",
          "Combining related datasets",
          "Split/merge columns, extract text/dates, custom and conditional columns",
        ],

        businessApplication: [
          "Combine customer, sales and product information",
          "Stack January, February and March sales into a quarterly dataset",
        ],

        practicalActivity: [
          "Combine three monthly sales files using Append",
          "Connect customer information using Merge",
        ],

        outcome:
          "Combine and transform multiple business datasets.",
      },

      {
        id: 7,
        title: "Complete Sales Dashboard + Revision",

        learn: [
          "End-to-end Excel, Power Query and visualization workflow",
          "KPI cards, slicers, PivotTables and PivotCharts",
          "Business insights and recommendations",
        ],

        businessApplication: [
          "Build a complete Retail Sales Performance dashboard for management",
        ],

        practicalActivity: [
          "Import and clean sales/customer/product data",
          "Append monthly sales files",
          "Merge related datasets",
          "Create PivotTables and PivotCharts",
          "Add KPI cards and slicers",
          "Identify insights and recommendations",
        ],

        outcome:
          "Build and present an interactive Excel Sales Dashboard.",
      },
    ],
  },

  {
    id: 4,
    week: "Week 4",
    title: "Statistics + Business Analytics",
    description:
      "Learn practical statistics and apply them to business KPIs, advertising performance and decision-making.",
    deliverable: "KPI Analysis Case Study",

    days: [
      {
        id: 1,
        title: "Mean, Median & Mode",

        learn: [
          "Mean, median and mode",
          "When to use each measure",
          "Effect of extreme values and outliers",
        ],

        businessApplication: [
          "Average order value",
          "Average customer spending",
          "Median employee salary",
          "Most common product/category purchased",
        ],

        practicalActivity: [],

        outcome:
          "Understand and interpret Mean, Median and Mode.",
      },

      {
        id: 2,
        title: "Variance & Standard Deviation",

        learn: [
          "Variance",
          "Standard deviation",
          "Low vs high variability",
          "Why standard deviation matters in business",
        ],

        businessApplication: [
          "Variation in daily sales",
          "Variation in delivery time",
          "Variation in customer spending",
          "Consistency of employee performance",
        ],

        practicalActivity: [],

        outcome:
          "Identify stable vs unstable business performance.",
      },

      {
        id: 3,
        title: "Percentiles, Correlation & Outliers",

        learn: [
          "25th, 50th, 75th, 90th and 95th percentiles",
          "Positive, negative and weak correlation",
          "Correlation does not imply causation",
          "Outlier identification and interpretation",
        ],

        businessApplication: [
          "Top 10% customers",
          "90th percentile delivery time",
          "Advertising spend vs sales",
          "Discount vs conversion",
          "Website traffic vs revenue",
        ],

        practicalActivity: [],

        outcome:
          "Find patterns and unusual data.",
      },

      {
        id: 4,
        title: "Business Metrics",

        learn: [
          "Growth",
          "Margin",
          "Conversion",
          "Retention",
          "Churn",
        ],

        businessApplication: [
          "Revenue growth",
          "Profit margin",
          "CTR and conversion rate",
          "CPA",
          "Customer retention",
        ],

        practicalActivity: [],

        outcome:
          "Calculate and interpret business KPIs.",
      },

      {
        id: 5,
        title: "KPI Analysis",

        learn: [
          "KPI selection",
          "Comparison and trends",
          "KPI diagnosis",
          "Business interpretation",
        ],

        businessApplication: [
          "Campaign performance dashboard",
          "Funnel analysis",
          "Identify improving and declining KPIs",
        ],

        practicalActivity: [
          "For each KPI ask: What is it?",
          "What is the current value?",
          "Is it improving or declining?",
          "How does it compare with the previous period?",
          "What factors might explain the change?",
          "What business action should be taken?",
        ],

        outcome:
          "Create a KPI analysis.",
      },

      {
        id: 6,
        title: "Case Study — Advertising",

        learn: [
          "Descriptive statistics",
          "Data quality and outlier analysis",
          "Correlation analysis",
          "Business KPI calculation",
          "KPI diagnosis",
        ],

        businessApplication: [
          "Analyze website visitors, leads, customers, revenue, product cost, marketing spend, orders and retention",
        ],

        practicalActivity: [
          "Calculate descriptive statistics",
          "Find and investigate outliers",
          "Check correlations",
          "Calculate growth, margin, conversion, retention and AOV",
          "Provide 3–5 actionable recommendations",
        ],

        outcome:
          "Complete an advertising/business analytics case study.",
      },

      {
        id: 7,
        title: "Revision + Mini Project",

        learn: [
          "Review all Week 4 concepts",
          "Connect statistics to business analytics",
        ],

        businessApplication: [
          "Build a final advertising KPI report",
        ],

        practicalActivity: [
          "Create a Business KPI Analysis Report covering statistics, outliers, correlations, growth, margin, conversion, retention, KPIs, insights and recommendations",
        ],

        outcome:
          "Present insights and recommendations from a complete KPI analysis.",
      },
    ],
  },

  {
    id: 5,
    week: "Week 5",
    title: "SQL Fundamentals",
    description:
      "Learn SQL fundamentals and apply them to business and advertising analysis.",
    deliverable: "50 SQL Problems",

    days: [
      {
        id: 1,
        title: "SELECT + FROM",

        learn: [
          "How SQL retrieves data",
          "Rows, columns, tables and aliases",
          "SELECT and FROM",
        ],

        businessApplication: [
          "Select campaign, spend, clicks and revenue",
        ],

        practicalActivity: [
          "Write queries that show all campaigns",
          "Select campaign names and advertising spend",
          "Select platform and revenue",
        ],

        outcome:
          "Understand how to read data from a table.",
      },

      {
        id: 2,
        title: "WHERE + Filtering",

        learn: [
          "Conditions",
          "Comparison operators",
          "AND/OR/IN/BETWEEN/LIKE",
        ],

        businessApplication: [
          "Find campaigns, dates, platforms and high-spend records",
        ],

        practicalActivity: [
          "Write filtered queries using multiple conditions",
        ],

        outcome:
          "Filter exactly the data you need.",
      },

      {
        id: 3,
        title: "DISTINCT + ORDER BY + NULLs",

        learn: [
          "Unique values",
          "Sorting results",
          "Missing data and NULL behavior",
        ],

        businessApplication: [
          "Find unique platforms",
          "Sort campaigns",
          "Identify missing KPI data",
        ],

        practicalActivity: [
          "Use DISTINCT and ORDER BY in business queries",
          "Identify records containing missing values",
        ],

        outcome:
          "Understand data quality and organization.",
      },

      {
        id: 4,
        title: "Aggregate Functions",

        learn: [
          "COUNT",
          "SUM",
          "AVG",
          "MIN",
          "MAX",
          "Aggregation and changes in analytical grain",
        ],

        businessApplication: [
          "Total spend",
          "Average CPC",
          "Total revenue",
          "Highest campaign spend",
        ],

        practicalActivity: [
          "Calculate business summaries with aggregate functions",
        ],

        outcome:
          "Summarize business data.",
      },

      {
        id: 5,
        title: "GROUP BY + HAVING",

        learn: [
          "Grouping data",
          "Grouped calculations",
          "Filtering groups with HAVING",
        ],

        businessApplication: [
          "Compare Google vs Meta",
          "Analyze campaign-level revenue",
          "Identify high-performing platforms",
        ],

        practicalActivity: [
          "Create grouped KPI queries",
          "Filter grouped results with HAVING",
        ],

        outcome:
          "Perform comparative KPI analysis.",
      },

      {
        id: 6,
        title: "CASE",

        learn: [
          "Conditional logic",
          "Business rules",
          "Data classification",
        ],

        businessApplication: [
          "Classify campaigns as High, Medium or Low performance",
          "Classify revenue, CPA, customer or campaign performance",
        ],

        practicalActivity: [
          "Create CASE-based performance categories",
        ],

        outcome:
          "Turn raw data into business categories.",
      },

      {
        id: 7,
        title: "Complete SQL Case Study + Revision",

        learn: [
          "SELECT, WHERE, DISTINCT, ORDER BY, NULLs",
          "Aggregate functions",
          "GROUP BY, HAVING and CASE",
        ],

        businessApplication: [
          "Analyze a complete advertising dataset and answer business questions",
        ],

        practicalActivity: [
          "Solve campaign, platform, revenue, spend and performance questions end to end",
          "Write business-focused SQL queries and explain the results",
        ],

        outcome:
          "Solve an end-to-end Business Analyst problem.",
      },
    ],
  },

  {
    id: 6,
    week: "Week 6",
    title: "Advanced SQL + Business Analytics",
    description:
      "Move into advanced SQL techniques including joins, CTEs, subqueries, date functions and window functions.",
    deliverable: "E-commerce SQL Project",

    days: [
      {
        id: 1,
        title: "JOINS",

        learn: [
          "Primary and foreign keys",
          "INNER, LEFT, RIGHT and FULL JOIN concepts",
          "Combining related tables",
        ],

        businessApplication: [
          "Connect customers, campaigns, orders and advertising data",
        ],

        practicalActivity: [
          "Join Customers with Orders",
          "Join Customers, Campaigns and Orders",
        ],

        outcome:
          "Understand how to combine business datasets.",
      },

      {
        id: 2,
        title: "SUBQUERIES",

        learn: [
          "Single-value subqueries",
          "Multi-value subqueries",
          "Correlated subqueries",
          "Using intermediate results",
        ],

        businessApplication: [
          "Find campaigns above average spend/revenue",
          "Find high-value customers",
        ],

        practicalActivity: [
          "Write a subquery for above-average campaign spend",
          "Use subqueries for intermediate business calculations",
        ],

        outcome:
          "Solve problems requiring intermediate results.",
      },

      {
        id: 3,
        title: "CTEs",

        learn: [
          "WITH clause",
          "Named temporary result sets",
          "Breaking complex SQL into logical steps",
        ],

        businessApplication: [
          "Build readable multi-step KPI analysis",
          "Create reusable campaign KPI datasets",
        ],

        practicalActivity: [
          "Calculate campaign metrics in one CTE",
          "Calculate ROAS and rank campaigns in subsequent CTEs",
        ],

        outcome:
          "Write cleaner and more maintainable SQL.",
      },

      {
        id: 4,
        title: "UNION + Date Functions",

        learn: [
          "UNION",
          "Combining compatible result sets",
          "Extracting year/month/day",
          "Date differences and period comparisons",
        ],

        businessApplication: [
          "Compare advertising periods",
          "Analyze monthly campaigns and sales trends",
          "Perform year-over-year analysis",
        ],

        practicalActivity: [
          "Combine compatible period datasets",
          "Calculate monthly advertising spend and revenue",
        ],

        outcome:
          "Perform time-based business analysis.",
      },

      {
        id: 5,
        title: "String Functions",

        learn: [
          "UPPER and LOWER",
          "TRIM",
          "CONCAT",
          "SUBSTRING",
          "REPLACE",
          "LENGTH",
        ],

        businessApplication: [
          "Clean campaign names, customer names, platforms and categories",
        ],

        practicalActivity: [
          "Standardize platform names",
          "Extract campaign and regional labels from text",
        ],

        outcome:
          "Perform practical data cleaning in SQL.",
      },

      {
        id: 6,
        title: "Window Functions",

        learn: [
          "ROW_NUMBER",
          "RANK",
          "DENSE_RANK",
          "LAG",
          "LEAD",
          "Ranking and comparing rows without collapsing them",
        ],

        businessApplication: [
          "Rank campaigns",
          "Find previous and next performance",
          "Analyze growth",
        ],

        practicalActivity: [
          "Find the top three campaigns within each platform",
          "Compare current month revenue with the previous month",
          "Rank products while handling ties",
        ],

        outcome:
          "Perform advanced analytical SQL.",
      },

      {
        id: 7,
        title: "Complete Advanced SQL Case Study",

        learn: [
          "Combine JOINs, subqueries, CTEs, UNION, date/string functions and window functions",
        ],

        businessApplication: [
          "Complete advertising KPI and campaign-performance analysis",
        ],

        practicalActivity: [
          "Solve a multi-table e-commerce/advertising analysis",
          "Calculate spend, revenue, CPA, ROAS and rankings",
          "Explain business implications of the results",
        ],

        outcome:
          "Solve an end-to-end advanced SQL business problem.",
      },
    ],
  },

  {
    id: 7,
    week: "Week 7",
    title: "Power BI Foundations",
    description:
      "Learn Power BI data import, Power Query, cleaning, modeling, visuals, filters and dashboard development.",
    deliverable: "Dashboard v1",

    days: [
      {
        id: 1,
        title: "Importing Data",

        learn: [
          "Importing business data into Power BI",
          "Connecting to common data sources",
          "Understanding imported tables",
        ],

        businessApplication: [
          "Bring sales data into Power BI for analysis",
        ],

        practicalActivity: [],

        outcome:
          "Load business data into Power BI.",
      },

      {
        id: 2,
        title: "Power Query Basics",

        learn: [
          "Power Query workflow",
          "Basic transformations",
          "Repeatable data preparation",
        ],

        businessApplication: [
          "Transform raw business data before reporting",
        ],

        practicalActivity: [],

        outcome:
          "Understand the Power Query data preparation workflow.",
      },

      {
        id: 3,
        title: "Cleaning & Transformations",

        learn: [
          "Cleaning data",
          "Transforming columns and values",
          "Preparing analysis-ready tables",
        ],

        businessApplication: [
          "Turn messy business data into usable reporting data",
        ],

        practicalActivity: [],

        outcome:
          "Prepare clean data for reporting.",
      },

      {
        id: 4,
        title: "Relationships & Data Model",

        learn: [
          "Relationships between tables",
          "Basic data modeling",
          "Connecting business dimensions and facts",
        ],

        businessApplication: [
          "Create a model that supports accurate reporting across business dimensions",
        ],

        practicalActivity: [],

        outcome:
          "Build a usable Power BI data model.",
      },

      {
        id: 5,
        title: "Report Canvas & Visuals",

        learn: [
          "Report canvas layout",
          "Visual hierarchy",
          "Basic formatting for professional reports",
        ],

        businessApplication: [
          "Turn cleaned business data into an interactive management report",
        ],

        practicalActivity: [
          "Import a sales dataset",
          "Create visuals and slicers for a management view",
          "Review the report from a stakeholder perspective",
        ],

        outcome:
          "Create clear and readable report pages.",
      },

      {
        id: 6,
        title: "Filters & Interactivity",

        learn: [
          "Visual-level filters",
          "Page-level filters",
          "Report-level filters",
          "Slicers and visual interactions",
          "Simple navigation",
        ],

        businessApplication: [
          "Let users explore sales by region, category, product and time",
        ],

        practicalActivity: [
          "Import a sales dataset",
          "Perform Power Query transformations",
          "Create relationships, visuals and slicers",
          "Review the report from a stakeholder perspective",
        ],

        outcome:
          "Build an interactive business report.",
      },

      {
        id: 7,
        title: "Dashboard v1 + Revision",

        learn: [
          "Combine data preparation, modeling and reporting",
          "Select KPIs that answer the business problem",
          "Review report layout, filters and relationships",
          "Explain the dashboard and key findings",
        ],

        businessApplication: [
          "Create and present a first business dashboard with key findings",
        ],

        practicalActivity: [
          "Load and clean the selected dataset in Power BI",
          "Build the data model, visuals, filters and final dashboard page",
          "Present Dashboard v1 and record the key business findings",
        ],

        outcome:
          "Deliver Dashboard v1.",
      },
    ],
  },

  {
    id: 8,
    week: "Week 8",
    title: "Power BI + DAX",
    description:
      "Build advanced Power BI reports using data modeling, DAX, time intelligence and interactive reporting.",
    deliverable: "Business Performance Dashboard",

    days: [
      {
        id: 1,
        title: "Star Schema",

        learn: [
          "Fact and dimension tables",
          "Keys and date dimensions",
          "One-to-many relationships",
          "Simple, scalable model design",
        ],

        businessApplication: [
          "Structure a sales model for accurate and scalable reporting",
        ],

        practicalActivity: [
          "Create or refine a star-schema sales model",
          "Build and test DAX measures under different filters",
        ],

        outcome:
          "Build a clean star-schema model.",
      },

      {
        id: 2,
        title: "Measures & DAX Basics",

        learn: [
          "Measures vs calculated columns",
          "SUM, COUNT and DISTINCTCOUNT",
          "Basic KPI measures",
        ],

        businessApplication: [
          "Create revenue, orders, quantity, customers and profit KPIs",
        ],

        practicalActivity: [
          "Create core business KPI measures",
          "Test measures under different filter contexts",
        ],

        outcome:
          "Write useful business measures.",
      },

      {
        id: 3,
        title: "CALCULATE & FILTER",

        learn: [
          "Filter context",
          "CALCULATE",
          "FILTER",
          "Changing evaluation context",
        ],

        businessApplication: [
          "Calculate sales and profit under specific conditions such as region or category",
        ],

        practicalActivity: [
          "Build filtered business measures",
          "Test results across different report filters",
        ],

        outcome:
          "Understand core DAX filter behavior.",
      },

      {
        id: 4,
        title: "DIVIDE & KPI Logic",

        learn: [
          "DIVIDE",
          "Safe division",
          "Percentages",
          "Margins",
          "Average order value",
        ],

        businessApplication: [
          "Build robust ratio measures and business KPIs",
        ],

        practicalActivity: [
          "Create presentation-ready KPI calculations",
          "Test measures for divide-by-zero conditions",
        ],

        outcome:
          "Create presentation-ready KPI calculations.",
      },

      {
        id: 5,
        title: "Time Intelligence",

        learn: [
          "Proper date table",
          "MTD and YTD",
          "Previous-period comparisons",
          "Year-over-year change and growth",
        ],

        businessApplication: [
          "Compare current sales with previous periods and track business growth",
        ],

        practicalActivity: [
          "Create MTD/YTD measures",
          "Add time comparisons and growth calculations",
        ],

        outcome:
          "Perform time-based business analysis.",
      },

      {
        id: 6,
        title: "Drillthrough, Bookmarks & Publishing",

        learn: [
          "Drillthrough pages",
          "Bookmarks and navigation",
          "Publishing",
          "Report usability and consistency",
        ],

        businessApplication: [
          "Create detailed management views and present a management-ready report",
        ],

        practicalActivity: [
          "Create or refine a star-schema sales model",
          "Build and test DAX measures",
          "Add drillthrough and bookmark interactions",
          "Prepare the report for publishing",
        ],

        outcome:
          "Build a polished interactive Power BI report.",
      },

      {
        id: 7,
        title: "Business Performance Dashboard + Revision",

        learn: [
          "Star schema, measures and time intelligence",
          "Interactivity for management questions",
          "KPIs, trends, comparisons and drillthrough",
          "Business-performance storytelling",
        ],

        businessApplication: [
          "Deliver a management dashboard with KPIs, trends, comparisons and drillable detail",
        ],

        practicalActivity: [
          "Build the final dashboard",
          "Test KPIs, filters, time comparisons and navigation",
          "Present the Business Performance Dashboard and explain the main insights",
        ],

        outcome:
          "Deliver Business Performance Dashboard.",
      },
    ],
  },

  {
    id: 9,
    week: "Week 9",
    title: "Python Foundations",
    description:
      "Build the Python programming foundation required for practical data analysis.",
    deliverable: "Python Practice Notebook",

    days: [
      {
        id: 1,
        title: "Python Syntax & Variables",

        learn: [
          "Python syntax, indentation and comments",
          "int, float, str and bool",
          "Type conversion",
          "Arithmetic, comparison and logical operators",
        ],

        businessApplication: [
          "Translate simple business calculations such as revenue, cost and profit into Python",
        ],

        practicalActivity: [
          "Create variables for sales, quantity, cost and profit",
          "Practice type conversion and calculations",
          "Print formatted business results",
        ],

        outcome:
          "Write and run basic Python programs confidently.",
      },

      {
        id: 2,
        title: "Data Structures",

        learn: [
          "Lists, tuples, sets and dictionaries",
          "Indexing and slicing",
          "Adding, removing and updating values",
        ],

        businessApplication: [
          "Store and organize customer, product and sales information using appropriate structures",
        ],

        practicalActivity: [
          "Create a product list and customer dictionary",
          "Practice indexing, slicing and updating",
          "Use a set to identify unique values",
        ],

        outcome:
          "Choose and manipulate the right Python data structure.",
      },

      {
        id: 3,
        title: "Conditions & Decision Making",

        learn: [
          "if, elif and else",
          "and, or and not",
          "Validation",
          "Classification and decision rules",
        ],

        businessApplication: [
          "Build business rules such as sales targets, customer categories and eligibility checks",
        ],

        practicalActivity: [
          "Write a sales-target checker",
          "Classify customers using multiple conditions",
          "Test different inputs",
        ],

        outcome:
          "Implement decision-based business logic.",
      },

      {
        id: 4,
        title: "Loops & Iteration",

        learn: [
          "for and while loops",
          "range()",
          "Iteration through lists and dictionaries",
          "break and continue",
        ],

        businessApplication: [
          "Process multiple transactions or records and calculate repeated business results",
        ],

        practicalActivity: [
          "Loop through sales and calculate totals",
          "Find highest and lowest values using iteration",
          "Practice a small nested-loop example",
        ],

        outcome:
          "Automate repetitive calculations with loops.",
      },

      {
        id: 5,
        title: "Functions",

        learn: [
          "Define functions with def",
          "Parameters and arguments",
          "Return values",
          "Reusable logic",
        ],

        businessApplication: [
          "Turn repeated business calculations into reusable functions for cleaner analysis scripts",
        ],

        practicalActivity: [
          "Create revenue, profit and percentage functions",
          "Call functions with different inputs",
          "Add simple validation",
        ],

        outcome:
          "Write modular and reusable Python code.",
      },

      {
        id: 6,
        title: "Jupyter + File Handling",

        learn: [
          "Jupyter cells and execution order",
          "Markdown",
          "Reading simple text and CSV files",
          "Writing results to a file",
        ],

        businessApplication: [
          "Create a practical notebook and work with simple business files as an analyst would",
        ],

        practicalActivity: [
          "Create a Jupyter Notebook with Markdown sections",
          "Read a small CSV/text file",
          "Write a summary result to a file",
        ],

        outcome:
          "Use Jupyter for organized practice and basic file operations.",
      },

      {
        id: 7,
        title: "Python Practice Notebook + Revision",

        learn: [
          "Combine syntax, data structures, conditions, loops, functions, Jupyter and file handling",
          "Practice business-oriented Python problems",
        ],

        businessApplication: [
          "Complete a practical notebook containing business-oriented Python exercises",
        ],

        practicalActivity: [
          "Complete at least 5 practical exercises",
          "Combine functions, loops, conditions and data structures",
          "Add a short learning summary",
        ],

        outcome:
          "Deliver a Python practice notebook.",
      },
    ],
  },

  {
    id: 10,
    week: "Week 10",
    title: "Pandas + Exploratory Data Analysis",
    description:
      "Use Pandas for data cleaning, analysis, transformation and exploratory data analysis.",
    deliverable: "Python EDA Project",

    days: [
      {
        id: 1,
        title: "Pandas Basics & DataFrames",

        learn: [
          "Pandas and its role in data analysis",
          "Series and DataFrame",
          "pd.read_csv() and pd.read_excel()",
          "head(), tail(), sample()",
          "shape, columns, index and dtypes",
        ],

        businessApplication: [
          "Load a sales export the same way an analyst receives data from a database or reporting tool",
          "Check column names and data types before analysis",
        ],

        practicalActivity: [
          "Load a sales CSV using pd.read_csv()",
          "Print df.head(), df.tail(), df.shape, df.columns and df.dtypes",
          "Select a single column and a subset of columns",
        ],

        outcome:
          "Comfortably load a real dataset into Pandas and understand its basic structure.",
      },

      {
        id: 2,
        title: "Data Inspection & Descriptive Statistics",

        learn: [
          "df.info()",
          "df.describe()",
          "unique() and nunique()",
          "value_counts()",
          "Connecting Pandas output to descriptive statistics",
        ],

        businessApplication: [
          "Spot unusually high or low sales values",
          "Understand orders by region or category",
          "Confirm which columns have missing data",
        ],

        practicalActivity: [
          "Run df.info() and df.describe()",
          "Use value_counts() on Region and Category",
          "Write down three observations about the dataset",
        ],

        outcome:
          "Profile any dataset quickly and identify quality issues before cleaning.",
      },

      {
        id: 3,
        title: "Missing Values & Duplicates",

        learn: [
          "isnull(), isna() and sum()",
          "dropna() vs fillna()",
          "Mean/median and forward-fill strategies",
          "duplicated() and drop_duplicates()",
          "Business judgment in data cleaning",
        ],

        businessApplication: [
          "Handle missing Profit values",
          "Resolve duplicate customer records",
          "Standardize inconsistent text values",
        ],

        practicalActivity: [
          "Count missing values per column",
          "Fill missing numeric values with mean/median",
          "Identify and remove duplicate rows",
        ],

        outcome:
          "Turn a messy, real-world dataset into a clean, analysis-ready DataFrame.",
      },

      {
        id: 4,
        title: "Selecting, Filtering & Sorting",

        learn: [
          "loc[]",
          "iloc[]",
          "Boolean filtering",
          "sort_values()",
          "sort_index()",
        ],

        businessApplication: [
          "Find West-region orders with sales above ₹50,000",
          "Find top 10 highest-revenue orders",
          "Find orders for a specific customer",
        ],

        practicalActivity: [
          "Filter a dataset by region and sales threshold",
          "Sort by Profit descending",
          "Select rows and columns using loc and iloc",
        ],

        outcome:
          "Slice and filter any dataset to answer targeted business questions.",
      },

      {
        id: 5,
        title: "GroupBy, Merge & Pivot Tables",

        learn: [
          "groupby()",
          "sum(), mean(), count() and agg()",
          "merge()",
          "concat()",
          "pivot_table()",
        ],

        businessApplication: [
          "Total sales and profit by region and category",
          "Combine orders with customer data",
          "Create region-by-category sales summaries",
        ],

        practicalActivity: [
          "Group the sales dataset by Region and Category",
          "Merge orders with customers",
          "Build a pivot_table summarizing Sales by Region and Month",
        ],

        outcome:
          "Perform multi-table, multi-level business analysis directly in Python.",
      },

      {
        id: 6,
        title: "Data Visualization",

        learn: [
          "Matplotlib",
          "Seaborn",
          "Line charts",
          "Bar charts",
          "Histograms",
          "Boxplots",
          "Heatmaps",
        ],

        businessApplication: [
          "Visualize sales trends",
          "Compare categories and regions",
          "Show distributions and relationships",
        ],

        practicalActivity: [
          "Create charts supporting business findings",
        ],

        outcome:
          "Communicate business findings visually.",
      },

      {
        id: 7,
        title: "Complete EDA Case Study + Revision",

        learn: [
          "EDA as load → inspect → clean → explore → visualize → summarize insights",
          "Connecting every Week 10 concept into one notebook workflow",
        ],

        businessApplication: [
          "Analyze a retail or e-commerce sales dataset",
          "Determine which region, category and product perform best",
          "Identify and explain data-quality issues",
        ],

        practicalActivity: [
          "Load and inspect the case-study data",
          "Clean missing values and duplicates",
          "Group, merge and pivot to answer at least five business questions",
          "Create at least four visualizations",
          "Write insights and recommendations",
        ],

        outcome:
          "Independently run a complete EDA workflow from raw data to business insight.",
      },
    ],
  },

  {
    id: 11,
    week: "Week 11",
    title: "AI + Portfolio + Capstone",
    description:
      "Learn AI-assisted analytics, professional documentation, GitHub, portfolio building and capstone planning.",
    deliverable: "Capstone Development",

    days: [
      {
        id: 1,
        title: "AI for Data Analysts",

        learn: [
          "AI tools as accelerators for analytics work",
          "AI for Excel formulas, SQL, DAX, Python debugging and documentation",
          "What AI cannot replace: business understanding, validation and judgment",
          "Always verify AI-generated outputs against real data",
        ],

        businessApplication: [
          "Draft an Excel formula and verify it",
          "Explain an unfamiliar SQL query or DAX measure",
          "Debug a Python error and understand the fix",
        ],

        practicalActivity: [
          "Use AI to generate an Excel formula and test it",
          "Draft an SQL query with AI and verify it",
          "Record one case where AI output was wrong or incomplete",
        ],

        outcome:
          "Use AI tools to work faster while still validating every result independently.",
      },

      {
        id: 2,
        title: "Prompt Engineering for Analytics",

        learn: [
          "Role + Context + Task + Format prompt structure",
          "Providing dataset structure for better outputs",
          "Iterative refinement",
        ],

        businessApplication: [
          "Draft business-question-to-SQL prompts",
          "Generate chart ideas",
          "Improve written business insights",
        ],

        practicalActivity: [
          "Rewrite three weak prompts into strong structured prompts",
          "Use one prompt to generate a query or formula and verify it",
          "Ask AI to critique one project insight",
        ],

        outcome:
          "Write prompts that consistently produce accurate, business-relevant AI output.",
      },

      {
        id: 3,
        title: "Git & GitHub Fundamentals",

        learn: [
          "Git and GitHub",
          "git init, git add, git commit, git status and git log",
          "git remote add origin, git push and git pull",
          "Branches",
          ".gitignore",
          "Meaningful commit messages",
        ],

        businessApplication: [
          "Version-control an analytics project",
          "Maintain project history",
          "Publish a project for resume or LinkedIn use",
        ],

        practicalActivity: [
          "Initialize a repository for one existing project",
          "Create a .gitignore",
          "Make at least three meaningful commits",
          "Push the repository to GitHub",
        ],

        outcome:
          "Confidently version-control and publish analytics projects using Git and GitHub.",
      },

      {
        id: 4,
        title: "Professional README & Documentation",

        learn: [
          "Why the README matters in a portfolio repository",
          "Business objective, problem, dataset, tools, cleaning, analysis, KPIs, findings, recommendations, screenshots, reproduction and future improvements",
          "Writing for a non-technical reader",
        ],

        businessApplication: [
          "Document the Week 3 Excel Dashboard",
          "Document the Week 6 SQL E-Commerce project",
          "Document the Week 10 Python EDA project",
        ],

        practicalActivity: [
          "Write a complete README for one existing project",
          "Add at least one screenshot",
          "Have a peer summarize the project from the README",
        ],

        outcome:
          "Produce a README that communicates a project's value in under 30 seconds.",
      },

      {
        id: 5,
        title: "Data Storytelling & Portfolio",

        learn: [
          "Data storytelling as a narrative",
          "Case study structure",
          "Business problem → what was done → what was found → what should happen next",
          "Before/after framing",
          "Portfolio formats",
        ],

        businessApplication: [
          "Turn an analytics project into a compelling case study",
        ],

        practicalActivity: [
          "Turn one project into a concise case study",
          "Prepare a before/after presentation of the analytical work",
        ],

        outcome:
          "Present analysis so it is understood, not just seen.",
      },

      {
        id: 6,
        title: "LinkedIn & Personal Branding",

        learn: [
          "Professional headline",
          "About section",
          "GitHub and portfolio links",
          "Project posts",
          "Networking outreach",
        ],

        businessApplication: [
          "Optimize LinkedIn for recruiter search",
          "Publish project case studies",
          "Connect with recruiters, analysts and target companies",
        ],

        practicalActivity: [
          "Update the LinkedIn headline and About section",
          "Add GitHub and portfolio links",
          "Publish one project post",
          "Send at least five targeted connection requests",
        ],

        outcome:
          "Have a recruiter-ready LinkedIn profile that reflects the analytics portfolio being built.",
      },

      {
        id: 7,
        title: "Capstone Planning & Kickoff",

        learn: [
          "What makes a strong end-to-end capstone",
          "Choosing a dataset and business problem",
          "Scoping business questions, data, tools and timeline",
          "GitHub repository structure",
        ],

        businessApplication: [
          "Choose a retail, e-commerce, marketing or operations problem aligned with target roles",
        ],

        practicalActivity: [
          "Select the capstone problem and dataset",
          "Write a one-page capstone charter",
          "Create the GitHub repository skeleton and initial README",
        ],

        outcome:
          "Enter Week 12 with a scoped, structured capstone project ready to build.",
      },
    ],
  },

  {
    id: 12,
    week: "Week 12",
    title: "Placement Sprint",
    description:
      "Prepare for placement through resume optimization, technical revision, business cases, mock interviews and applications.",
    deliverable: "Final Capstone + Mock Interviews",

    days: [
      {
        id: 1,
        title: "Resume + ATS Optimization",

        learn: [
          "ATS-friendly formatting",
          "Keyword extraction from job descriptions",
          "Action + Scale + Tool + Analysis + Result project bullet formula",
          "Resume tailoring",
        ],

        businessApplication: [
          "Compare a real job description with the current resume",
          "Identify missing keywords",
          "Reorder skills based on job requirements",
        ],

        practicalActivity: [
          "Analyze 2 real job descriptions",
          "Rewrite project bullets",
          "Produce a one-page ATS-friendly resume",
        ],

        outcome:
          "Leave Day 1 with a one-page ATS-optimized resume tailored to target Data Analyst roles.",
      },

      {
        id: 2,
        title: "SQL Revision + Practice",

        learn: [
          "SELECT, WHERE, DISTINCT and ORDER BY",
          "NULL handling and CASE",
          "JOINs and subqueries",
          "CTEs and UNION",
          "Date and string functions",
          "ROW_NUMBER, RANK, DENSE_RANK, LAG and LEAD",
        ],

        businessApplication: [
          "Rank top-performing products within regions",
          "Compare current revenue with previous revenue",
          "Solve layered business questions using CTEs",
        ],

        practicalActivity: [
          "Solve 20 mixed SQL problems in a 90-minute timed session",
          "Review missed problems",
          "Review the Week 12 SQL interview practice bank",
        ],

        outcome:
          "Solve SQL business questions quickly and explain the reasoning behind every query.",
      },

      {
        id: 3,
        title: "Excel Revision + Practice",

        learn: [
          "XLOOKUP",
          "INDEX-MATCH",
          "IF and IFS",
          "SUMIFS and COUNTIFS",
          "PivotTables",
          "PivotCharts",
          "Slicers",
          "Power Query",
        ],

        businessApplication: [
          "Rebuild the Week 3 sales dashboard",
          "Analyze sales and profit by region",
          "Clean a messy dataset using Power Query",
        ],

        practicalActivity: [
          "Solve 10 timed Excel business questions",
          "Rebuild a KPI dashboard",
          "Review Excel interview questions",
        ],

        outcome:
          "Move through Excel formulas, PivotTables and dashboards quickly and accurately.",
      },

      {
        id: 4,
        title: "Power BI Revision + Practice",

        learn: [
          "Star-schema data modeling",
          "Relationships",
          "CALCULATE",
          "FILTER",
          "DIVIDE",
          "Time intelligence",
          "Bookmarks",
          "Drillthrough",
          "Publishing",
        ],

        businessApplication: [
          "Improve the Week 8 Business Performance Dashboard",
          "Add YoY or MoM growth measures",
          "Prepare a portfolio-ready report",
        ],

        practicalActivity: [
          "Improve an existing Power BI model",
          "Add or refine at least 2 DAX measures",
          "Publish the report and export screenshots",
        ],

        outcome:
          "Present a polished, portfolio-ready Power BI dashboard with confidence.",
      },

      {
        id: 5,
        title: "Business Case Studies",

        learn: [
          "KPI interpretation",
          "Root-cause thinking",
          "Observation → hypothesis → validation → recommendation",
          "Writing actionable recommendations",
        ],

        businessApplication: [
          "Diagnose revenue and margin changes",
          "Investigate conversion decline",
          "Analyze customer retention changes",
        ],

        practicalActivity: [
          "Work through 10 timed business cases",
          "Answer cases verbally",
          "Compare answers with model responses",
        ],

        outcome:
          "Answer business-case interview questions in a clear, structured and confident way.",
      },

      {
        id: 6,
        title: "Mock Interviews",

        learn: [
          "Technical interview format",
          "Case-study interview format",
          "HR and behavioral interviews",
          "STAR method",
          "Recording and reviewing interview performance",
        ],

        businessApplication: [
          "Technical SQL, Excel and DAX questions",
          "Live KPI diagnosis",
          "Behavioral interview scenarios",
        ],

        practicalActivity: [
          "Complete at least 2 mock interviews",
          "Record each mock",
          "Identify 2–3 areas for improvement",
          "Redo weak answers",
        ],

        outcome:
          "Walk into a real interview having rehearsed technical and behavioral formats.",
      },

      {
        id: 7,
        title: "Capstone Presentation + Applications",

        learn: [
          "10-minute capstone presentation structure",
          "Business problem → approach → findings → dashboard → recommendations → impact",
          "Job application tracking",
          "Multi-channel job search",
          "Professional outreach",
        ],

        businessApplication: [
          "Present the capstone as it would be presented to a hiring panel",
          "Track applications systematically",
          "Send targeted outreach",
        ],

        practicalActivity: [
          "Deliver and record the full capstone presentation",
          "Set up an application tracker",
          "Complete the Final Job-Ready Checklist",
        ],

        outcome:
          "Finish the program with a presented capstone, active job search and job-ready profile.",
      },
    ],
  },
];

export default courseData;