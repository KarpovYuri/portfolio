<template>
  <div class="container">
    <form class="email-form">
      <div class="input-wrp">
        <input type="text" class="form-input" placeholder="Имя" />
        <input type="email" class="form-input" placeholder="Email" />
      </div>
      <input type="text" class="form-input" placeholder="Тема сообщения" />
      <textarea class="form-input" rows="6" placeholder="Сообщение" />
      <button type="button" class="form-button">Отправить</button>
    </form>
  </div>
</template>

<style scoped>
.container {
  padding-bottom: 30px;
}
.email-form {
  padding: 30px;
  background: var(--accent-second-color);
  display: flex;
  gap: 16px;
  flex-direction: column;
}

.input-wrp {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.form-input {
  flex-grow: 1;
  padding: 10px 15px;
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  background: var(--accent-second-color);
  border: 0;
  transition: 0.3s;
  color: var(--main-color);
  outline: none;
}

.form-input:focus {
  background-color: rgba(255, 255, 255, 0.11);
}

.form-button {
  background: var(--accent-color);
  border: 0;
  padding: 10px 30px;
  color: var(--main-color);
  transition: 0.4s;
  border-radius: 4px;
  align-self: center;
  cursor: pointer;
}

.form-button:hover {
  background: var(--btn-hover-color);
}

@media (max-width: 768px) {
  .input-wrp {
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 576px) {
  .email-form {
    padding: 20px 16px;
  }
}
</style>
