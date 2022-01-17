from django.db import models

# Класс, описывающий что будет в карточке товара.
class Article(models.Model):
	title = models.CharField('Название', max_length=50) # Название.
	body = models.TextField('Описание', max_length=200)
	date = models.DateTimeField('Дата публикации')

	def __str__(self):
		return f'Товар: {self.title}'

	# Чисто для корректного отображения названий:
	class Meta:
		verbose_name = 'Article(таблица товаров).'
		verbose_name_plural = 'Article(таблица товаров).'