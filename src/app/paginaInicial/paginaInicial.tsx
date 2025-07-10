'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, TrendingUp, FileText } from "lucide-react";
import styles from "./paginaInicial.module.css";

export default function PaginaInicial() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Globe className={styles.logo} />
            <h1 className={styles.title}>
              Sistema de Demandas
            </h1>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            Entrar no Sistema
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <Badge variant="secondary" className={styles.badge}>
            Versão 2.0
          </Badge>
          <h2 className={styles.heroTitle}>
            Gerencie suas demandas de forma
            <span className={styles.heroTitleHighlight}> inteligente</span>
          </h2>
          <p className={styles.heroDescription}>
            Sistema completo para gerenciamento de demandas, acompanhamento de projetos 
            e colaboração em equipe com interface moderna e intuitiva.
          </p>
          <div className={styles.heroButtons}>
            <Button size="lg" className="text-lg px-8 py-3">
              Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          <Card className={styles.featureCard}>
            <CardHeader>
              <div className={`${styles.iconContainer} ${styles.iconContainerBlue}`}>
                <FileText className={`${styles.icon} ${styles.iconBlue}`} />
              </div>
              <CardTitle className={styles.cardTitle}>Gestão de Demandas</CardTitle>
              <CardDescription className={styles.cardDescription}>
                Organize e acompanhe todas as suas demandas em um só lugar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={styles.cardContent}>
                Sistema completo para criação, acompanhamento e finalização de demandas 
                com status em tempo real e notificações automáticas.
              </p>
            </CardContent>
          </Card>

          <Card className={styles.featureCard}>
            <CardHeader>
              <div className={`${styles.iconContainer} ${styles.iconContainerGreen}`}>
                <Users className={`${styles.icon} ${styles.iconGreen}`} />
              </div>
              <CardTitle className={styles.cardTitle}>Colaboração em Equipe</CardTitle>
              <CardDescription className={styles.cardDescription}>
                Trabalhe em conjunto com sua equipe de forma eficiente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={styles.cardContent}>
                Compartilhe demandas, atribua responsabilidades e mantenha todos 
                informados sobre o progresso dos projetos.
              </p>
            </CardContent>
          </Card>

          <Card className={styles.featureCard}>
            <CardHeader>
              <div className={`${styles.iconContainer} ${styles.iconContainerPurple}`}>
                <TrendingUp className={`${styles.icon} ${styles.iconPurple}`} />
              </div>
              <CardTitle className={styles.cardTitle}>Relatórios e Analytics</CardTitle>
              <CardDescription className={styles.cardDescription}>
                Visualize o progresso e performance da sua equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className={styles.cardContent}>
                Dashboards interativos com gráficos e relatórios detalhados para 
                acompanhar métricas importantes e tomar decisões baseadas em dados.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Sistema de Demandas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
