import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3, TrendingUp, Users } from "lucide-react";

const LabChallenges = () => {
  const challenges = [
    {
      icon: Code2,
      title: "Web Scraping & Data Automation",
      objective: "Extract structured data from live HTML tables for analysis",
      problem: "Manual data collection from web sources was time-consuming and error-prone",
      approach: [
        "Analyzed HTML structure to identify target elements",
        "Built Python scraper using BeautifulSoup library",
        "Implemented data cleaning pipeline with Pandas",
        "Automated workflow in Google Colab",
      ],
      tools: ["Python", "BeautifulSoup", "Pandas", "Google Colab"],
      takeaway: "Robust parsing logic and data validation are critical for production-grade automation",
    },
    {
      icon: Database,
      title: "Netflix Data Wrangling",
      objective: "Clean and transform messy Kaggle dataset for analysis",
      problem: "Real-world data rarely arrives clean—missing values, duplicates, and format issues abound",
      approach: [
        "Conducted initial data quality assessment",
        "Handled missing values with appropriate strategies",
        "Removed duplicates and standardized formats",
        "Created derived features for downstream ML",
      ],
      tools: ["Pandas", "NumPy", "Jupyter Notebooks"],
      takeaway: "Data preparation constitutes 80% of ML success—invest time upfront",
    },
    {
      icon: BarChart3,
      title: "Exploratory Data Analysis (EDA) Masterclass",
      objective: "Uncover hidden patterns and insights through visualization",
      problem: "Data contains stories—but only if you know how to ask the right questions",
      approach: [
        "Generated descriptive statistics and distributions",
        "Created univariate and bivariate visualizations",
        "Identified correlations and outliers",
        "Formulated data-driven hypotheses",
      ],
      tools: ["Matplotlib", "Seaborn", "Python"],
      takeaway: "EDA is hypothesis generation—let the data guide your analytical journey",
    },
    {
      icon: TrendingUp,
      title: "Hotel Revenue Dashboard (Power BI)",
      objective: "Build interactive BI dashboard for revenue performance tracking",
      problem: "Stakeholders needed real-time insights into revenue drivers and trends",
      approach: [
        "Designed star schema data model",
        "Created DAX measures for KPIs",
        "Built interactive visualizations with slicers",
        "Optimized performance with Power Query",
      ],
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      takeaway: "Star schema architecture unlocks BI performance and scalability",
    },
    {
      icon: Users,
      title: "HR Attrition Dashboard (Tableau)",
      objective: "Visualize employee turnover drivers for strategic HR planning",
      problem: "High attrition rates required data-driven intervention strategies",
      approach: [
        "Connected to HR database and cleaned data",
        "Designed attrition metrics and trend charts",
        "Created demographic and tenure breakdowns",
        "Built predictive attrition risk indicators",
      ],
      tools: ["Tableau", "SQL", "Data Storytelling"],
      takeaway: "Visual storytelling transforms data into actionable strategic insights",
    },
  ];

  return (
    <section id="lab">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
          Lab <span className="gradient-text">Challenges</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Hands-on technical challenges showcasing data engineering, analytics, and BI expertise
        </p>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {challenges.map((challenge, index) => (
              <AccordionItem
                key={index}
                value={`challenge-${index}`}
                className="card-elevated px-6 border-none"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                      <challenge.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <span className="text-lg font-heading font-semibold block">{challenge.title}</span>
                      <span className="text-sm text-muted-foreground">{challenge.objective}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 space-y-4">
                  <div className="border-l-2 border-accent pl-6 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Problem Statement</h4>
                      <p className="text-muted-foreground">{challenge.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Approach</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {challenge.approach.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {challenge.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[hsl(173,55%,39%)]/10 border-l-4 border-[hsl(173,55%,39%)] p-4 rounded">
                      <h4 className="font-semibold text-[hsl(173,55%,39%)] mb-1">Key Takeaway</h4>
                      <p className="text-sm text-muted-foreground">{challenge.takeaway}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default LabChallenges;
