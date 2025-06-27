# Sistema de Categorías para Quotes

Este documento describe la implementación del sistema de categorías para la aplicación Quotes.

## Características implementadas

1. **Definición de categorías**
   - Creación de un archivo de constantes con las categorías disponibles
   - Cada categoría tiene un ID, nombre, color y opcionalmente un icono
   - Funciones de utilidad para trabajar con categorías

2. **Base de datos**
   - Modificación de la tabla `quotes` para incluir un campo `categories` de tipo array de texto
   - Creación de un índice GIN para búsquedas eficientes por categoría
   - Función SQL para obtener quotes por categoría

3. **Componentes de UI**
   - Selector de categorías en el formulario de creación de quotes
   - Visualización de categorías en las tarjetas de quotes
   - Barra lateral con lista de categorías disponibles
   - Filtrado de quotes por categoría en el dashboard

4. **Navegación**
   - Rutas específicas para ver quotes por categoría (`/category/:categoryId`)
   - Integración con el componente Trending para mostrar quotes por categoría

## Estructura de archivos

- `constants/categories.ts` - Definición de categorías y funciones de utilidad
- `components/features/CategorySidebar.tsx` - Componente para mostrar categorías en la barra lateral
- `components/features/QuoteCard.tsx` - Tarjeta de quote con soporte para mostrar categorías
- `components/features/QuoteCreator.tsx` - Formulario de creación de quotes con selector de categorías
- `components/QuoteModal.tsx` - Modal para crear quotes con selector de categorías
- `pages/Dashboard.tsx` - Página principal con filtrado por categorías
- `pages/Trending.tsx` - Página de tendencias con soporte para categorías
- `routes/index.tsx` - Configuración de rutas incluyendo categorías
- `supabase/migrations/20240601_add_categories_to_quotes.sql` - Migración SQL para añadir categorías

## Uso

### Crear un quote con categorías

1. Haz clic en el botón "Quotea" o usa el formulario en el dashboard
2. Escribe el contenido del quote y opcionalmente el autor
3. Selecciona una o más categorías haciendo clic en los botones de categoría
4. Haz clic en "Publicar" para crear el quote

### Filtrar quotes por categoría

1. En el dashboard, haz clic en "Filtrar por categoría"
2. Selecciona una categoría para ver solo los quotes de esa categoría
3. Haz clic en la misma categoría nuevamente para quitar el filtro

### Navegar a una página de categoría

1. Haz clic en una categoría en la barra lateral
2. Verás todos los quotes de esa categoría
3. Puedes usar los filtros de tiempo (Hoy, Semana, Mes, Todos) para refinar los resultados

## Próximas mejoras

- Estadísticas de uso por categoría
- Recomendaciones de quotes basadas en categorías preferidas
- Búsqueda avanzada combinando múltiples categorías
- Categorías personalizadas creadas por usuarios
