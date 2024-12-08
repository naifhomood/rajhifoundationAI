export function createAnalysisControls() {
  const container = document.createElement('div');
  container.className = 'analysis-controls';
  
  container.innerHTML = `
    <div class="analysis-options">
      <h3>توجيه الذكاء الاصطناعي</h3>
      <div class="instructions-container">
        <textarea
          id="customInstructions"
          class="custom-textarea"
          placeholder="اكتب تعليماتك للذكاء الاصطناعي هنا... مثال: قم بتحليل المشاريع المختارة من حيث الفعالية والتكلفة، واقترح طرق لتحسين أثرها على المجتمع"
          rows="4"
        ></textarea>
      </div>
    </div>
  `;
  
  return container;
}