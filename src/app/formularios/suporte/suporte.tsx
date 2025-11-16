'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { InputWithLabel, SelectWithLabel, TextareaWithLabel } from "@/components/input-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useState } from "react";
import { IconHeadphones } from "@tabler/icons-react";
import styles from "./suporte.module.css";

export default function FormularioSuporte() {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    tipoSuporte: '',
    categoria: '',
    impacto: '',
    usuarioAfetado: '',
    urgencia: '',
    prazo: '',
    temPrazo: true,
    problemaRecorrente: false,
    temEvidencias: false,
    acessoRemoto: false
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTogglePrazo = () => {
    setFormData(prev => ({
      ...prev,
      temPrazo: !prev.temPrazo,
      prazo: !prev.temPrazo ? prev.prazo : ''
    }));
  };

  const handleToggleRecorrente = () => {
    setFormData(prev => ({
      ...prev,
      problemaRecorrente: !prev.problemaRecorrente
    }));
  };

  const handleToggleEvidencias = () => {
    setFormData(prev => ({
      ...prev,
      temEvidencias: !prev.temEvidencias
    }));
  };

  const handleToggleAcessoRemoto = () => {
    setFormData(prev => ({
      ...prev,
      acessoRemoto: !prev.acessoRemoto
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário de suporte:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  const tipoSuporteOptions = [
    { value: "incidente", label: "Incidente" },
    { value: "problema-tecnico", label: "Problema Técnico" },
    { value: "duvida-sistema", label: "Dúvida sobre Sistema" },
    { value: "treinamento", label: "Treinamento/Capacitação" },
    { value: "acesso-permissao", label: "Acesso/Permissão" },
    { value: "erro-sistema", label: "Erro no Sistema" }
  ];

  const categoriaOptions = [
    { value: "login-acesso", label: "Login/Acesso" },
    { value: "funcionalidade", label: "Funcionalidade" },
    { value: "performance", label: "Performance/Lentidão" },
    { value: "interface", label: "Interface/Usabilidade" },
    { value: "integracao", label: "Integração" },
    { value: "dados-perdidos", label: "Dados Perdidos/Corrompidos" }
  ];

  const impactoOptions = [
    { value: "baixo", label: "Baixo - Problema menor, workaround disponível" },
    { value: "medio", label: "Médio - Funcionalidade afetada, mas sistema operacional" },
    { value: "alto", label: "Alto - Sistema indisponível para alguns usuários" },
    { value: "critico", label: "Crítico - Sistema completamente indisponível" }
  ];

  const urgenciaOptions = [
    { value: "baixa", label: "Baixa" },
    { value: "media", label: "Média" },
    { value: "alta", label: "Alta" },
    { value: "critica", label: "Crítica" }
  ];

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <div className={styles.titleContainer}>
                <IconHeadphones className={styles.icon} />
                <h1 className={styles.title}>Nova Demanda de Suporte</h1>
              </div>
              <p className={styles.subtitle}>
                Relate problemas técnicos, dúvidas ou necessidades de treinamento
              </p>
            </div>
            <div className={styles.formContainer}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle>Informações do Suporte</CardTitle>
                  <CardDescription>
                    Descreva detalhadamente o problema ou necessidade de suporte
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGrid}>
                      <InputWithLabel
                        id="titulo"
                        label="Resumo do Problema"
                        placeholder="Ex: Erro ao fazer login no sistema"
                        required={true}
                        value={formData.titulo}
                        onChange={(e) => handleInputChange('titulo', e.target.value)}
                        className={styles.fullWidth}
                      />
                      
                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="tipoSuporte"
                          label="Tipo de Suporte"
                          placeholder="Selecione o tipo"
                          required={true}
                          value={formData.tipoSuporte}
                          onValueChange={(value) => handleInputChange('tipoSuporte', value)}
                          options={tipoSuporteOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="categoria"
                          label="Categoria"
                          placeholder="Selecione a categoria"
                          required={true}
                          value={formData.categoria}
                          onValueChange={(value) => handleInputChange('categoria', value)}
                          options={categoriaOptions}
                          className={styles.halfWidth}
                        />
                      </div>

                      <div className={styles.rowTwo}>
                        <SelectWithLabel
                          id="impacto"
                          label="Impacto"
                          placeholder="Selecione o impacto"
                          required={true}
                          value={formData.impacto}
                          onValueChange={(value) => handleInputChange('impacto', value)}
                          options={impactoOptions}
                          className={styles.halfWidth}
                        />
                        
                        <SelectWithLabel
                          id="urgencia"
                          label="Urgência"
                          placeholder="Selecione a urgência"
                          required={true}
                          value={formData.urgencia}
                          onValueChange={(value) => handleInputChange('urgencia', value)}
                          options={urgenciaOptions}
                          className={styles.halfWidth}
                        />
                      </div>

                      <InputWithLabel
                        id="usuarioAfetado"
                        label="Usuário(s) Afetado(s)"
                        placeholder="Nome do usuário ou departamento afetado"
                        required={true}
                        value={formData.usuarioAfetado}
                        onChange={(e) => handleInputChange('usuarioAfetado', e.target.value)}
                        className={styles.fullWidth}
                      />
                      
                      <div className={styles.prazoContainer}>
                        <div className={styles.prazoHeader}>
                          <label className={styles.prazoLabel}>Prazo para Resolução</label>
                          <div className={styles.prazoToggle}>
                            <Checkbox
                              id="temPrazo"
                              checked={formData.temPrazo}
                              onCheckedChange={handleTogglePrazo}
                            />
                            <label htmlFor="temPrazo" className={styles.toggleLabel}>
                              Definir prazo
                            </label>
                          </div>
                        </div>
                        {formData.temPrazo && (
                          <InputWithLabel
                            id="prazo"
                            label=""
                            type="date"
                            placeholder=""
                            required={false}
                            value={formData.prazo}
                            onChange={(e) => handleInputChange('prazo', e.target.value)}
                            className={styles.prazoInput}
                          />
                        )}
                      </div>

                      <TextareaWithLabel
                        id="descricao"
                        label="Descrição Detalhada"
                        placeholder="Descreva o problema em detalhes: quando ocorreu, passos para reproduzir, mensagens de erro, etc."
                        required={true}
                        value={formData.descricao}
                        onChange={(e) => handleInputChange('descricao', e.target.value)}
                        rows={5}
                        className={styles.fullWidth}
                      />

                      <div className={styles.checkboxContainer}>
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="problemaRecorrente"
                            checked={formData.problemaRecorrente}
                            onCheckedChange={handleToggleRecorrente}
                          />
                          <label htmlFor="problemaRecorrente" className={styles.checkboxLabel}>
                            Problema recorrente/já aconteceu antes
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="temEvidencias"
                            checked={formData.temEvidencias}
                            onCheckedChange={handleToggleEvidencias}
                          />
                          <label htmlFor="temEvidencias" className={styles.checkboxLabel}>
                            Tenho prints/evidências do problema
                          </label>
                        </div>
                        
                        <div className={styles.checkboxItem}>
                          <Checkbox
                            id="acessoRemoto"
                            checked={formData.acessoRemoto}
                            onCheckedChange={handleToggleAcessoRemoto}
                          />
                          <label htmlFor="acessoRemoto" className={styles.checkboxLabel}>
                            Autorizo acesso remoto se necessário
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.buttonContainer}>
                      <Button type="submit" className={styles.submitButton}>
                        Cadastrar Demanda de Suporte
                      </Button>
                      <Button type="button" variant="outline" className={styles.cancelButton}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}